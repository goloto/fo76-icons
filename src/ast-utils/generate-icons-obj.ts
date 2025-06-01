import { ICON_CATEGORIES_ORDER, GROUP_MAIN_ICONS_MAP } from '@/constants';
import * as ALL_RULES from '@/rules';
import * as ALL_ICON_ENUMS from '@/generated/icons-enum';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';
import type { Icon, IconNames, Rule, RulesGroup } from '@/types';
import { getMaxLength } from '@/utils/get-max-length';
import { generateCharCode } from '@/utils/generate-icon-char-code';
import ts from 'typescript';

export const generateIconsObj = async (): Promise<string> => {
  const iconEnumPropertiesMap = Object.entries(ALL_ICON_ENUMS).reduce(
    (enumAccumulator, [enumName, enumMembers]) => {
      const propertyNameMap = Object.entries(enumMembers).reduce(
        (mapAccumulator, [key, value]) => ({
          ...mapAccumulator,
          [value as IconNames]: {
            name: enumName as IconNames,
            property: key,
          },
        }),
        {}
      );

      return { ...enumAccumulator, ...propertyNameMap };
    },
    <Record<IconNames, { name: IconNames; property: string }>>{}
  );
  const categoryEnumPropertiesMap = Object.entries(ICON_CATEGORIES).reduce(
    (mapAccumulator, [key, value]) => ({
      ...mapAccumulator,
      [value]: key,
    }),
    <Record<ICON_CATEGORIES, string>>{}
  );
  const unsortedRuleGroups = Object.values(ALL_RULES);
  const sortedRuleGroups = ICON_CATEGORIES_ORDER.reduce(
    (accumulator, category) => {
      const group = unsortedRuleGroups.find(
        (group) => group.category === category.name
      );

      if (!!group) {
        accumulator.push(group);
      }

      return accumulator;
    },
    <RulesGroup<IconNames>[]>[]
  );

  // объединяем все правила для подсчёта максимальной длины префиксов
  const concatenatedRules = sortedRuleGroups.reduce(
    (accumulator, group) => [...accumulator, ...group.rules],
    <Rule<IconNames>[]>[]
  );
  const prefixesLength = getMaxLength(
    concatenatedRules
      .filter((rule) => !!rule.prefix)
      .map((rule) => rule.prefix as IconNames[])
  );
  const uniqueIconsSet: Set<IconNames> = new Set();
  const icons: Icon[] = [];

  sortedRuleGroups.forEach((group) => {
    for (let prefixIndex = 0; prefixIndex < prefixesLength; prefixIndex++) {
      icons.push(
        ...group.rules
          .map((rule) => rule.prefix?.[prefixIndex])
          .filter((prefix) => !!prefix)
          .filter((prefix) => {
            // фильтруем только основные для текущей категории иконки, игнорируя такие, как, к примеру, ICON_UTILITY
            if (!GROUP_MAIN_ICONS_MAP[group.category].includes(prefix)) {
              return false;
            }

            // проверяем, встречалась ли уже эта иконка
            if (uniqueIconsSet.has(prefix)) {
              return false;
            }

            uniqueIconsSet.add(prefix);

            return true;
          })
          .map((prefix) => ({
            name: prefix,
            charCode: generateCharCode(prefix),
            category: group.category,
          }))
      );
    }
  });

  const templateFile = await Bun.file(
    './src/generated/icons.template.ts'
  ).text();

  const file = ts.createSourceFile(
    `icons.ts`,
    templateFile,
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const iconEnumsImportSpecifiers = Object.keys(ALL_ICON_ENUMS).map((value) =>
    ts.factory.createImportSpecifier(
      false,
      undefined,
      ts.factory.createIdentifier(value)
    )
  );

  const iconsObjectExpressions = icons.map((icon) => {
    const name = iconEnumPropertiesMap[icon.name]
      ? ts.factory.createPropertyAccessChain(
          ts.factory.createIdentifier(iconEnumPropertiesMap[icon.name].name),
          undefined,
          iconEnumPropertiesMap[icon.name].property
        )
      : ts.factory.createStringLiteral(icon.name, true);
    const category = ts.factory.createPropertyAccessChain(
      ts.factory.createIdentifier('ICON_CATEGORIES'),
      undefined,
      categoryEnumPropertiesMap[icon.category]
    );

    const namePropertyAssignment = ts.factory.createPropertyAssignment(
      'name',
      name
    );
    const groupPropertyAssignment = ts.factory.createPropertyAssignment(
      'category',
      category
    );
    const charCodePropertyAssignment = ts.factory.createPropertyAssignment(
      'charCode',
      ts.factory.createStringLiteral(icon.charCode, true)
    );
    const objectLiteralExpression = ts.factory.createObjectLiteralExpression(
      [
        namePropertyAssignment,
        groupPropertyAssignment,
        charCodePropertyAssignment,
      ],
      true
    );

    return objectLiteralExpression;
  });

  const replaceArrayExpression = (node: ts.Node): ts.Node => {
    if (ts.isArrayLiteralExpression(node)) {
      const arrayLiteralExpression = ts.factory.createArrayLiteralExpression(
        iconsObjectExpressions,
        true
      );

      return arrayLiteralExpression;
    } else if (
      ts.isImportDeclaration(node) &&
      (node.moduleSpecifier as ts.StringLiteral).text.includes('/icons-enum')
    ) {
      const namedImports = ts.factory.createNamedImports(
        iconEnumsImportSpecifiers
      );
      const importClause = ts.factory.createImportClause(
        false,
        undefined,
        namedImports
      );
      const importDeclaration = ts.factory.updateImportDeclaration(
        node,
        undefined,
        importClause,
        node.moduleSpecifier,
        undefined
      );

      return importDeclaration;
    } else {
      return ts.visitEachChild(node, replaceArrayExpression, undefined);
    }
  };

  const transformedResult = ts.transform(file, [
    (context) => (rootNode: ts.Node) =>
      ts.visitNode(rootNode, replaceArrayExpression),
  ]);

  return printer.printNode(
    ts.EmitHint.Unspecified,
    transformedResult.transformed[0],
    file
  );
};

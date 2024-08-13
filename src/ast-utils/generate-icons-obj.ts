import { ICON_CATEGORIES_ORDER } from '@/constants/categories-order';
import * as ALL_RULES from '@/rules';
import * as ALL_ICON_ENUMS from '@/generated/icons-enum';
import type { Icon, IconNames, RulesGroup } from '@/types';
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

  const icons = sortedRuleGroups.reduce(
    (accumulator, group) => {
      const maxPrefixLength = getMaxLength(
        group.rules
          .filter((rule) => !!rule.prefix)
          .map((rule) => rule.prefix as IconNames[])
      );
      const iconsArray: Icon[] = [];

      for (let index = 0; index < maxPrefixLength; index++) {
        iconsArray.push(
          ...group.rules
            .map((rule) => rule.prefix?.[index])
            .filter((prefix) => !!prefix)
            .map((prefix) => ({
              name: prefix,
              charCode: generateCharCode(prefix),
            }))
        );
      }

      return [...accumulator, ...iconsArray];
    },
    <Icon[]>[]
  );

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

    const namePropertyAssignment = ts.factory.createPropertyAssignment(
      'name',
      name
    );
    const charCodePropertyAssignment = ts.factory.createPropertyAssignment(
      'charCode',
      ts.factory.createStringLiteral(icon.charCode, true)
    );
    const objectLiteralExpression = ts.factory.createObjectLiteralExpression(
      [namePropertyAssignment, charCodePropertyAssignment],
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

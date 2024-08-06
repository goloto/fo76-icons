import { ICONS_DIRECTORY } from '@/constants';
import type { CategoryOrder } from '@/types';
import { readdir } from 'node:fs/promises';
import ts from 'typescript';

export const generateIconsEnum = async (
  categoryOrder: CategoryOrder[]
): Promise<string> => {
  const file = ts.createSourceFile(
    `icons-enum.ts`,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const enumBlocksArray = [];

  for (const category of categoryOrder) {
    const categoryIconPaths = await readdir(
      `${ICONS_DIRECTORY}/${category.name}`
    );

    const categoryIcons = categoryIconPaths
      .filter((item) => item.includes('.svg'))
      .map((item) => item.replace('.svg', ''));

    if (categoryIcons.length === 0) {
      continue;
    }

    const enumMembers = categoryIcons.map((icon) => {
      return ts.factory.createEnumMember(
        icon
          .split('_')
          .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
          .join(''),
        ts.factory.createStringLiteral(icon, true)
      );
    });
    const enumDeclaration = ts.factory.createEnumDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      `ICON_${category.name.replaceAll('-', '_').toUpperCase()}`,
      enumMembers
    );

    enumBlocksArray.push(enumDeclaration);
  }

  return printer.printList(
    ts.ListFormat.MultiLine,
    ts.factory.createNodeArray(enumBlocksArray),
    file
  );
};

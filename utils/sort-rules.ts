import * as fs from 'node:fs';
import * as path from 'path';
import * as ts from 'typescript';

const visit = (node: ts.Node): ts.Node => {
  if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
    const elements = (node as ts.ArrayLiteralExpression)
      .elements as ts.NodeArray<ts.ObjectLiteralExpression>;
    const sortedElements = elements.toSorted((objA, objB) => {
      const orderPropA = Number(
        objA.properties.find(
          (property) => property.name.escapedText === 'order'
        ).initializer.text
      );
      const orderPropB = Number(
        objB.properties.find(
          (property) => property.name.escapedText === 'order'
        ).initializer.text
      );

      return orderPropA - orderPropB;
    });
    const newNode = ts.factory.createArrayLiteralExpression(
      sortedElements,
      true
    );

    return newNode;
  } else {
    return ts.visitEachChild(node, visit, undefined);
  }
};

const transformerFactory: ts.TransformerFactory<ts.Node> =
  (context) => (rootNode) => {
    return ts.visitNode(rootNode, visit);
  };

const inputFile = ts.createSourceFile(
  'x.ts',
  fs.readFileSync(path.resolve(process.cwd(), './rules/__test.ts'), 'utf-8'),
  ts.ScriptTarget.Latest,
  undefined
);
const transformationResult = ts.transform(inputFile, [transformerFactory]);
const transformedSourceFile = transformationResult.transformed[0];
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const result = printer.printNode(
  ts.EmitHint.Unspecified,
  transformedSourceFile,
  inputFile
);

await Bun.write('./rules/__test.ts', result);

import ts, { type PropertyAssignment } from 'typescript';

const visitPropertyAssignments =
  (node: ts.Node, index: number) => (node: ts.Node) => {
    if (
      node.kind === ts.SyntaxKind.PropertyAssignment &&
      node.getChildAt(0, inputFile).getText(inputFile) === 'order'
    ) {
      return ts.factory.updatePropertyAssignment(
        node as PropertyAssignment,
        ts.factory.createIdentifier('order'),
        ts.factory.createNumericLiteral(index)
      );
    }

    return node;
  };

const visit = (node: ts.Node): ts.Node => {
  if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
    const elements = (node as ts.ArrayLiteralExpression)
      .elements as ts.NodeArray<ts.ObjectLiteralExpression>;
    const sortedElements = elements
      .toSorted((objA, objB) => {
        const orderPropA = objA.properties.find(
          (property) => property?.name?.getText(inputFile) === 'order'
        ) as ts.PropertyAssignment;
        const orderPropB = objB.properties.find(
          (property) => property?.name?.getText(inputFile) === 'order'
        ) as ts.PropertyAssignment;
        const orderValueA = Number(orderPropA.initializer.getText(inputFile));
        const orderValueB = Number(orderPropB.initializer.getText(inputFile));

        return orderValueA - orderValueB;
      })
      .map((node, index) =>
        ts.visitEachChild(
          node,
          visitPropertyAssignments(node, index),
          undefined
        )
      );

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

const inputFileString = await Bun.file('./rules/__test.ts').text();
const inputFile = ts.createSourceFile(
  './rules/__test.ts',
  inputFileString,
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

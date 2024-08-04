import ts from 'typescript';

const visit = (node: ts.Node): ts.Node => {
  if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
    const elements = (node as ts.ArrayLiteralExpression)
      .elements as ts.NodeArray<ts.ObjectLiteralExpression>;
    const sortedElements = elements.toSorted((objA, objB) => {
      const orderPropA = objA.properties.find(
        (property) => property?.name?.getText(inputFile) === 'order'
      ) as ts.PropertyAssignment;
      const orderPropB = objB.properties.find(
        (property) => property?.name?.getText(inputFile) === 'order'
      ) as ts.PropertyAssignment;

      return Number(orderPropA) - Number(orderPropB);
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

const inputFileString = await Bun.file('./rules/__test.ts').text();
const inputFile = ts.createSourceFile(
  'x.ts',
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

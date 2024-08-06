import ts from 'typescript';

export const sortArrayExpression = (file: string) => {
  const inputFile = ts.createSourceFile(
    'filename.ts',
    file,
    ts.ScriptTarget.Latest,
    undefined
  );
  const transformationResult = ts.transform(inputFile, [
    transformerFactory(inputFile),
  ]);
  const transformedSourceFile = transformationResult.transformed[0];
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printNode(
    ts.EmitHint.Unspecified,
    transformedSourceFile,
    inputFile
  );

  return result;
};

const transformerFactory: (
  sourceFile: ts.SourceFile
) => ts.TransformerFactory<ts.Node> =
  (sourceFile: ts.SourceFile) => (context) => (rootNode) => {
    return ts.visitNode(rootNode, visitSourceFileFactory(sourceFile));
  };

const visitPropertyAssignmentsFactory =
  (index: number, sourceFile: ts.SourceFile) => (node: ts.Node) => {
    if (
      node.kind === ts.SyntaxKind.PropertyAssignment &&
      node.getChildAt(0, sourceFile).getText(sourceFile) === 'order'
    ) {
      return ts.factory.updatePropertyAssignment(
        node as ts.PropertyAssignment,
        ts.factory.createIdentifier('order'),
        ts.factory.createNumericLiteral(index)
      );
    }

    return node;
  };

const visitSourceFileFactory =
  (sourceFile: ts.SourceFile) =>
  (node: ts.Node): ts.Node => {
    if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
      const elements = (node as ts.ArrayLiteralExpression)
        .elements as ts.NodeArray<ts.ObjectLiteralExpression>;
      const sortedElements = elements
        .toSorted((objA, objB) => {
          const orderPropA = objA.properties.find(
            (property) => property?.name?.getText(sourceFile) === 'order'
          ) as ts.PropertyAssignment;
          const orderPropB = objB.properties.find(
            (property) => property?.name?.getText(sourceFile) === 'order'
          ) as ts.PropertyAssignment;
          const orderValueA = Number(
            orderPropA.initializer.getText(sourceFile)
          );
          const orderValueB = Number(
            orderPropB.initializer.getText(sourceFile)
          );

          return orderValueA - orderValueB;
        })
        .map((node, index) =>
          ts.visitEachChild(
            node,
            visitPropertyAssignmentsFactory(index, sourceFile),
            undefined
          )
        );

      const newNode = ts.factory.createArrayLiteralExpression(
        sortedElements,
        true
      );

      return newNode;
    } else {
      return ts.visitEachChild(
        node,
        visitSourceFileFactory(sourceFile),
        undefined
      );
    }
  };

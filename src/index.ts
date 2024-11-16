/**
 * This adds data-__source-code-location to JSX tags.
 *
 * NOTE: lineNumber and columnNumber are both 1-based.
 *
 * == JSX Literals ==
 *
 * <sometag />
 *
 * becomes:
 *
 * <sometag data-__source-code-location={`${__jsxFileName}:${lineNumber}:${columnNumber}`} />
 */
import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";

const TRACE_ID = "data-__source-code-location";

const isReactFragment = (node: t.Node) =>
  t.isJSXMemberExpression(node) &&
  (node?.object as t.JSXIdentifier)?.name === "React" &&
  node?.property?.name === "Fragment";

type State = {
  fileNameIdentifier: t.Identifier;
};
export default declare<State>((api) => {
  api.assertVersion(7);

  return {
    name: "transform-react-jsx-data-source-code-location",
    visitor: {
      JSXOpeningElement(path, state) {
        const { node } = path;

        if (
          // the element was generated and doesn't have location information
          !node.loc ||
          !state.filename ||
          // the element is a React.Fragment
          isReactFragment(node.name)
        ) {
          return;
        }

        let sourceCodeLocation = state.filename;

        const line = node.loc?.start?.line;
        if (line !== undefined) {
          sourceCodeLocation += `:${line}`;
          const column = node.loc?.start?.column;
          if (column !== undefined) {
            // column + 1 to make it 1-based instead of 0-based.
            sourceCodeLocation += `:${column + 1}`;
          }
        }

        node.attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier(TRACE_ID),
            t.stringLiteral(sourceCodeLocation),
          ),
        );
      },
    },
  };
});

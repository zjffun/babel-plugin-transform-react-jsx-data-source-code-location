const babel = require("@babel/core");
const plugin = require("../../");

const babelConfig = {
  filename: "/fake/path/mock.js",
  presets: ["@babel/preset-react"],
  plugins: [plugin],
};

it("basic-sample should work", () => {
  const example = `
var x = <div></div>;
var x = <View></View>;
`;
  const { code } = babel.transform(example, babelConfig);
  expect(code).toMatchSnapshot();
});

it("no-jsx will do nothing", () => {
  const example = `
var x = 42;
`;
  const { code } = babel.transform(example, babelConfig);
  expect(code).toMatchSnapshot();
});

it("with data-__srouce-code-location should work", () => {
  const example = `
var x = <img data-__srouce-code-location="" />;
var x = <img data-__srouce-code-location={""} />;
var x = <img data-__srouce-code-location={0} />;
var x = <img data-__srouce-code-location={1} />;
var x = <img data-__srouce-code-location={null} />;
var x = <img data-__srouce-code-location={undefined} />;
var x = <img data-__srouce-code-location={{test: test}} />;
var x = <img data-__srouce-code-location={obj} />;
var x = <img data-__srouce-code-location={obj} data-__srouce-code-location="" />;
`;
  const { code } = babel.transform(example, babelConfig);
  expect(code).toMatchSnapshot();
});

it("with JSXSpreadAttribute should work", () => {
  const example = `
var x = <div {...test}></div>;
var x = <View {...test}></View>;
`;
  const { code } = babel.transform(example, babelConfig);
  expect(code).toMatchSnapshot();
});

it("React.Fragment should not add data-__srouce-code-location", () => {
  const example = `
var x = <></>;
var x = <React.Fragment></React.Fragment>;
`;
  const { code } = babel.transform(example, babelConfig);
  expect(code).toMatchSnapshot();
});


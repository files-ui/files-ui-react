import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const ValidateFileResponseAPIrows = [
  {
    name: "valid",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>If true, that means that the File is valid</>,
  },
  {
    id: 2,
    name: "errors",
    type: <TypeHighlight np>{"string[]"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The list of errors associated with an specific file.</>,
  },
];

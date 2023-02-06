import * as React from "react";
import "./CodeHighlight.scss";

interface CodeHighlightProps {
  children?: React.ReactNode;
  darkMode?: boolean;
}
const CodeHighlight: React.FC<CodeHighlightProps> = (
  props: CodeHighlightProps
) => {
  const { children, darkMode } = props;
  return (
    <code className={darkMode ? "code-highlight dark-mode" : "code-highlight"}>
      {children}
    </code>
  );
};
export default CodeHighlight;

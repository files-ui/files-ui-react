import * as React from "react";
import { UserContext } from "../../globals/contexts/UserContext";
import "./CodeHighlight.scss";

interface CodeHighlightProps {
  children?: React.ReactNode;
  darkMode?: boolean;
}
const CodeHighlight: React.FC<CodeHighlightProps> = (
  props: CodeHighlightProps
) => {
  const { children } = props;
  const [usuario, ] = React.useContext(UserContext);
  const darkMode = usuario.darkMode;
  const finaldarkmodeclassName = !darkMode
    ? "code-highlight"
    : "code-highlight darkmode";

  return <code className={finaldarkmodeclassName}>{children}</code>;
};
export default CodeHighlight;

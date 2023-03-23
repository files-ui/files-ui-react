import * as React from "react";
import { ParagraphMainProps } from "./MainParagraphProps";
import "./MainParagraph.scss";
import { UserContext } from "../../globals/contexts/UserContext";
const MainParagraph: React.FC<ParagraphMainProps> = (
  props: ParagraphMainProps
) => {
  const { content, children } = props;
  const [usuario, ] = React.useContext(UserContext);
  const darkModeOn = usuario.darkMode;
  const className = darkModeOn ? "paragraph-main darkmode" : "paragraph-main";

  return <p className={className}>{children || content}</p>;
};
export default MainParagraph;

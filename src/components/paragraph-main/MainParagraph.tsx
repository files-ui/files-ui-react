import * as React from "react";
import { ParagraphMainProps } from "./MainParagraphProps";
import "./MainParagraph.scss";
const MainParagraph: React.FC<ParagraphMainProps> = (
  props: ParagraphMainProps
) => {
  const { content, children } = props;
  return <p className="paragraph-main">{children || content}</p>;
};
export default MainParagraph;

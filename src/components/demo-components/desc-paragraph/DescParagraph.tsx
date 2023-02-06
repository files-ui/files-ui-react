import * as React from "react";
import { DescParagraphProps } from "./DescParagraphProps";
import "./DescParagraphProps.scss";
const DescParagraph: React.FC<DescParagraphProps> = (
  props: DescParagraphProps
) => {
  const { content, children, margin, darkMode } = props;
  return (
    <div className={darkMode?"paragraph-desc dark-mode":"paragraph-desc"} style={{ margin: margin }}>
      {children || content}
    </div>
  );
};
export default DescParagraph;

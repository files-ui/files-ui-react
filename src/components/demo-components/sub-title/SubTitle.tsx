import * as React from "react";
import { SubTitleProps } from "./SubTitleProps";
import "./SubTitle.scss";
const SubTitle: React.FC<SubTitleProps> = (props: SubTitleProps) => {
  const { content, darkMode } = props;
  return <h2 className={darkMode?"subtitle dark-mode":"subtitle"}>{content}</h2>;
};
export default SubTitle;

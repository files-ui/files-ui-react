import * as React from "react";
import { handleClickUtil } from "../../utils";
import { parseSize } from "../utils/utils";
import { IconProps } from "../IconProps/IconProps";

export interface EditProps extends IconProps {}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  const {
    onClick,
    color,
    colorFill = "#2196f3",
    size = "medium",
    style,
    className,
  } = props;

  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};

  return (
    <svg
      className={className || ""}
      style={onClick ? { cursor: "pointer", ...finalStyle } : finalStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color || colorFill}
      onClick={(e) => {
        handleClickUtil(e);
        onClick?.(e);
      }}
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  );
};

export default Edit;

import * as React from "react";
import { handleClickUtil } from "../../utils";
import { parseSize } from "../utils/utils";
import { IconProps } from "../IconProps/IconProps";

export interface CheckBoxProps extends IconProps {}

const CheckBox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const {
    onClick,
    color,
    colorFill = "#1976d2",
    size = "medium",
    style,
    className,
    "aria-label": ariaLabel,
    "aria-checked": ariaChecked,
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
      role="checkbox"
      aria-label={ariaLabel}
      aria-checked={ariaChecked}
      tabIndex={onClick ? 0 : undefined}
      onClick={(e) => {
        handleClickUtil(e);
        onClick?.(e);
      }}
    >
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
};

export default CheckBox;

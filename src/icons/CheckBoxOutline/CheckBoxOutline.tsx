import * as React from "react";
import { handleClickUtil } from "../../utils";
import { parseSize } from "../utils/utils";
import { IconProps } from "../IconProps/IconProps";

export interface CheckBoxOutlineProps extends IconProps {}

const CheckBoxOutline: React.FC<CheckBoxOutlineProps> = (props: CheckBoxOutlineProps) => {
  const {
    onClick,
    color,
    colorFill = "#757575",
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
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </svg>
  );
};

export default CheckBoxOutline;

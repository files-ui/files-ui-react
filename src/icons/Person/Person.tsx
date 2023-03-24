import * as React from "react";
import { parseSize } from "../utils/utils";
import { PersonProps } from "./PersonProps";
import { handleClickUtil } from "../../utils";

const Person: React.FC<PersonProps> = (props: PersonProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
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
      fill={color ? color : "#000000"}
      onClick={(e) => {
        handleClickUtil(e);
        onClick?.(e);
      }}
    >
      <path
        d="M0 0h24v24H0z"
        opacity=".9"
        fill={colorFill ? colorFill : "none"}
      />
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};
export default Person;

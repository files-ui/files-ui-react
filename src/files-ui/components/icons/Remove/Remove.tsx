import * as React from "react";
import { parseSize } from "../utils/utils";
import { RemoveProps } from "./RemoveProps";

const Remove: React.FC<RemoveProps> = (props: RemoveProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize: number = parseSize(size);
  const finalStyle: React.CSSProperties = style ? style : {};
  return (
    <svg
      className={className || ""}
      style={onClick ? { cursor: "pointer", ...finalStyle } : finalStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
      onClick={(e) => onClick?.(e)}
    >
      <path
        d="M0 0h24v24H0V0z"
        opacity=".9"
        fill={colorFill ? colorFill : "none"}
        //fill={"red"}
      />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
    </svg>
  );
};
export default Remove;

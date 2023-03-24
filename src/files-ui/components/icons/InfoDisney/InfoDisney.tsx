import * as React from "react";
import { parseSize } from "../utils/utils";
import { InfoDisneyProps } from "./InfoDisneyProps";
import { handleClickUtil } from "../../../files-ui-react/utils";

const InfoDisney: React.FC<InfoDisneyProps> = (props: InfoDisneyProps) => {
  const {
    size,
    color,
    //colorFill,
    onClick,
    style,
    className,
  } = props;
  const finalSize: number = parseSize(size)-2;
  const finalStyle: React.CSSProperties = style ? style : {};
  return (
    <svg
      //alt=""
      className={className || ""}
      style={onClick ? { cursor: "pointer", ...finalStyle } : finalStyle}
      aria-hidden="true"
      aria-label="info"
      fill={color || "#000000"}
      role="img"
      transform=""
      version="1.1"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      width={`${finalSize}px`}
      onClick={(e) => {
        handleClickUtil(e);
        onClick?.(e);
      }}
      //style="height: 32px; min-width: 32px; width: 32px; z-index: auto;"
      //class="sc-htoDjs bUEQUS"
    >
      <path
        d="M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"
        //class="sc-gzVnrw cPWggY"
      ></path>
    </svg>
  );
};
export default InfoDisney;

import * as React from "react";
import { handleClickUtil } from "../../utils";
import { parseSize } from "../utils/utils";
import { DownloadFileProps } from "./DownloadFileProps";

const DownloadFile: React.FC<DownloadFileProps> = (
  props: DownloadFileProps
) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  return (
    <svg
      className={className || ""}
      style={onClick ? { cursor: "pointer", ...finalStyle } : finalStyle}
      enableBackground="new 0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color || "#000000"}
      onClick={(e) => {
        handleClickUtil(e);
        onClick?.(e);
      }}
    >
      <g>
        <rect fill={colorFill || "none"} height={finalSize} width={finalSize} />
      </g>
      <g>
        <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
      </g>
    </svg>
  );
};
export default DownloadFile;

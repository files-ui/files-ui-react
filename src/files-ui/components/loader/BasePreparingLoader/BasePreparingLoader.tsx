import * as React from "react";
import { parseSize } from "../../icons/utils/utils";
import { BasePreparingLoaderProps } from "./BasePreparingLoaderProps";

const BasePreparingLoader: React.FC<BasePreparingLoaderProps> = (
  props: BasePreparingLoaderProps
) => {
  const {
    size,
    color,
    //colorFill,
    //onClick,
    style,
    //className,
    radius,
    x,
    y,
    width,
  } = props;
  const finalRadius = radius || 46;
  const finalX = x || 50;
  const finalY = y || 50;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`${finalSize}px`}
      height={`${finalSize}px`}
      style={finalStyle}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx={`${finalX}`}
        cy={`${finalY}`}
        r={`${finalRadius}`}
        fill="none"
        stroke={color || "#14ff00"}
        strokeWidth={`${width || 8}px`}
        strokeDasharray={"164.93361431346415 100.97787143782138"}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values={`0 ${finalX} ${finalX};360 ${finalX} ${finalX}`}
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};
export default BasePreparingLoader;

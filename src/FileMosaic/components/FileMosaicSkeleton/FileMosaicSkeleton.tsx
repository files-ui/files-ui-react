import * as React from "react";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../../overridable";

type SizeVariant = "xs" | "small" | "medium" | "large";

interface FileMosaicSkeletonProps extends FuiSkeletonProps {
  sizeVariant?: SizeVariant;
}

const sizeMap: Record<SizeVariant, { width: number; mainHeight: number; circleSize: number }> = {
  xs: { width: 88, mainHeight: 88, circleSize: 24 },
  small: { width: 110, mainHeight: 110, circleSize: 30 },
  medium: { width: 132, mainHeight: 132, circleSize: 38 },
  large: { width: 176, mainHeight: 176, circleSize: 48 },
};

const defaultFileMosaicSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: 132,
  height: 160,
};

const FileMosaicSkeleton: React.FC<FileMosaicSkeletonProps> = (
  props: FileMosaicSkeletonProps,
) => {
  const { sizeVariant = "medium", ...restProps } = props;
  const { className, style, animation, width, height } = mergeProps(
    restProps,
    defaultFileMosaicSkeletonProps,
  );

  const dims = sizeMap[sizeVariant];
  const finalWidth = width !== 132 ? width : dims.width;

  return (
    <div
      className={`files-ui-file-mosaic-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 8,
        width: finalWidth,
        ...style,
      }}
    >
      <FuiSkeleton animation={animation} width={finalWidth} height={dims.mainHeight} />
      <FuiSkeleton animation={animation} width={finalWidth} height={14} />
      <FuiSkeleton animation={animation} width={finalWidth ? `calc(${typeof finalWidth === "number" ? finalWidth + "px" : finalWidth} * 0.72)` : 96} height={12} />
      <div style={{ display: "flex", gap: 8 }}>
        <FuiSkeleton animation={animation} width={dims.circleSize} height={dims.circleSize} variant="circular" />
        <FuiSkeleton animation={animation} width={dims.circleSize} height={dims.circleSize} variant="circular" />
      </div>
      <div style={{ height: 0, width: 0, overflow: "hidden" }} aria-hidden="true">
        {height}
      </div>
    </div>
  );
};

export default FileMosaicSkeleton;
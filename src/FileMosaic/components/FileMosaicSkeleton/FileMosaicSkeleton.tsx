import * as React from "react";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../../overridable";

const defaultFileMosaicSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: 132,
  height: 160,
};

const FileMosaicSkeleton: React.FC<FuiSkeletonProps> = (
  props: FuiSkeletonProps,
) => {
  const { className, style, animation, width, height } = mergeProps(
    props,
    defaultFileMosaicSkeletonProps,
  );

  return (
    <div
      className={`files-ui-file-mosaic-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 8,
        width,
        ...style,
      }}
    >
      <FuiSkeleton animation={animation} width={width} height={132} />
      <FuiSkeleton animation={animation} width={width} height={14} />
      <FuiSkeleton animation={animation} width={width ? `calc(${width} * 0.72)` : 96} height={12} />
      <div style={{ display: "flex", gap: 8 }}>
        <FuiSkeleton animation={animation} width={38} height={38} variant="circular" />
        <FuiSkeleton animation={animation} width={38} height={38} variant="circular" />
      </div>
      <div style={{ height: 0, width: 0, overflow: "hidden" }} aria-hidden="true">
        {height}
      </div>
    </div>
  );
};

export default FileMosaicSkeleton;
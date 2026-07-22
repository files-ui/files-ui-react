import * as React from "react";
import FuiSkeleton from "../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../overridable";

const defaultFileInputButtonSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: 160,
  height: 42,
};

const FileInputButtonSkeleton: React.FC<FuiSkeletonProps> = (
  props: FuiSkeletonProps,
) => {
  const { className, style, animation, width, height } = mergeProps(
    props,
    defaultFileInputButtonSkeletonProps,
  );

  return (
    <div
      className={`files-ui-file-input-button-skeleton${className ? ` ${className}` : ""}`}
      style={{ display: "inline-flex", ...style }}
    >
      <FuiSkeleton
        animation={animation}
        width={width}
        height={height}
        style={{ borderRadius: 9999 }}
      />
    </div>
  );
};

export default FileInputButtonSkeleton;
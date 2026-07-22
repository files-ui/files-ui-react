import * as React from "react";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../../overridable";

const defaultFileCardSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: 320,
  height: 100,
};

const FileCardSkeleton: React.FC<FuiSkeletonProps> = (
  props: FuiSkeletonProps,
) => {
  const { className, style, animation, width, height } = mergeProps(
    props,
    defaultFileCardSkeletonProps,
  );

  return (
    <div
      className={`files-ui-file-card-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width,
        minHeight: height,
        padding: 12,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <FuiSkeleton animation={animation} width={100} height={100} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <FuiSkeleton animation={animation} width="85%" height={16} />
        <FuiSkeleton animation={animation} width="68%" height={12} />
        <FuiSkeleton animation={animation} width="45%" height={12} />
      </div>
    </div>
  );
};

export default FileCardSkeleton;
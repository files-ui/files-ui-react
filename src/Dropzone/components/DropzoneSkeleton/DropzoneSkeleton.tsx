import * as React from "react";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../../overridable";

const defaultDropzoneSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: "100%",
  height: 180,
};

const DropzoneSkeleton: React.FC<FuiSkeletonProps> = (
  props: FuiSkeletonProps,
) => {
  const { className, style, animation, width, height } = mergeProps(
    props,
    defaultDropzoneSkeletonProps,
  );

  return (
    <div
      className={`files-ui-dropzone-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width,
        minHeight: height,
        padding: 20,
        boxSizing: "border-box",
        borderRadius: 12,
        ...style,
      }}
    >
      <FuiSkeleton animation={animation} width="55%" height={18} />
      <FuiSkeleton animation={animation} width="78%" height={14} />
      <FuiSkeleton animation={animation} width="100%" height={height ? 88 : 96} />
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <FuiSkeleton animation={animation} width={72} height={32} />
        <FuiSkeleton animation={animation} width={72} height={32} />
      </div>
    </div>
  );
};

export default DropzoneSkeleton;
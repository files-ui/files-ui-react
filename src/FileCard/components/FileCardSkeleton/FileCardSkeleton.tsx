import * as React from "react";
import FuiSkeleton from "../../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../../overridable";

type SizeVariant = "xs" | "small" | "medium" | "large";

interface FileCardSkeletonProps extends FuiSkeletonProps {
  sizeVariant?: SizeVariant;
}

const sizeMap: Record<SizeVariant, { width: number; height: number; thumbSize: number }> = {
  xs: { width: 220, height: 70, thumbSize: 60 },
  small: { width: 270, height: 85, thumbSize: 80 },
  medium: { width: 320, height: 100, thumbSize: 100 },
  large: { width: 420, height: 130, thumbSize: 120 },
};

const defaultFileCardSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "rectangular",
  width: 320,
  height: 100,
};

const FileCardSkeleton: React.FC<FileCardSkeletonProps> = (
  props: FileCardSkeletonProps,
) => {
  const { sizeVariant = "medium", ...restProps } = props;
  const { className, style, animation, width, height } = mergeProps(
    restProps,
    defaultFileCardSkeletonProps,
  );

  const dims = sizeMap[sizeVariant];
  const finalWidth = width !== 320 ? width : dims.width;
  const finalHeight = height !== 100 ? height : dims.height;

  return (
    <div
      className={`files-ui-file-card-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: finalWidth,
        minHeight: finalHeight,
        padding: 12,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <FuiSkeleton animation={animation} width={dims.thumbSize} height={dims.thumbSize} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <FuiSkeleton animation={animation} width="85%" height={16} />
        <FuiSkeleton animation={animation} width="68%" height={12} />
        <FuiSkeleton animation={animation} width="45%" height={12} />
      </div>
    </div>
  );
};

export default FileCardSkeleton;
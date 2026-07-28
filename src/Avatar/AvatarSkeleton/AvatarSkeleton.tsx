import * as React from "react";
import FuiSkeleton from "../../skeleton/FuiSkeleton";
import { FuiSkeletonProps } from "../../skeleton/FuiSkeletonProps";
import { mergeProps } from "../../overridable";

const defaultAvatarSkeletonProps: FuiSkeletonProps = {
  animation: "wave",
  variant: "circular",
  width: 160,
  height: 160,
};

const AvatarSkeleton: React.FC<FuiSkeletonProps> = (
  props: FuiSkeletonProps,
) => {
  const { className, style, animation, variant, width, height } = mergeProps(
    props,
    defaultAvatarSkeletonProps,
  );

  return (
    <FuiSkeleton
      className={className}
      style={style}
      animation={animation}
      variant={variant}
      width={width}
      height={height}
    />
  );
};

export default AvatarSkeleton;
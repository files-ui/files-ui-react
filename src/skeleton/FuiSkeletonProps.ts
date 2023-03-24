import { OverridableComponentProps } from "../overridable";



export interface FuiSkeletonPropsMap extends OverridableComponentProps {
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false;
  /**
   * The type of content that will be rendered.
   * @default 'rectangular'
   */
  variant?: 'rectangular' | 'circular';
  /**
   * Width of the skeleton.
   */
  width?: number | string;
  /**
    * Height of the skeleton.
    */
  height?: number | string;
}

export type FuiSkeletonProps = {
  [S in keyof FuiSkeletonPropsMap]: FuiSkeletonPropsMap[S]
}
/**
 * Dafult properties for Skeleton Component
 */
export const FuiSkeletonDefaultProps: FuiSkeletonProps = {
  animation: "pulse",
  variant: "rectangular",
  width: "133px",
  height: "133px"
}


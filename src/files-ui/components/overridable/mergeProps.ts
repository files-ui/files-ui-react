import { OverridableComponentProps } from "./OverridableComponentsProps";

/**
 * Merge props that come form user and those ones that are by default
 * if incommingProps is null this returns the default props value
 * 
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
 export function mergeProps<T extends OverridableComponentProps>
 (incommingProps: T | undefined,
     defaultProps: T): T {
console.log("incommingProps",incommingProps);
 if (!incommingProps) {
     return defaultProps;
 } else {
     return {
         ...defaultProps, ...incommingProps
     };
 }
}


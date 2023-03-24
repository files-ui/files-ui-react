import { OverridableComponentProps } from "../../overridable";

export interface InfiniteLoaderPropsMap extends OverridableComponentProps {
    size?: "micro" | "small" | "semi-medium" | "medium" | "large" | number;
    onClick?: Function;
    text?:string;
} 


export type InfiniteLoaderProps = {
    [F in keyof InfiniteLoaderPropsMap]: InfiniteLoaderPropsMap[F]
}


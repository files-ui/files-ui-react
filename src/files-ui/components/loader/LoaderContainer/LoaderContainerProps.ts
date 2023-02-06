import { OverridableComponentProps } from "../../overridable";

export interface LoaderContainerPropsMap extends OverridableComponentProps {
    size?: "micro" | "small" | "semi-medium" | "medium" | "large" | number;
    onClick?: Function;
    text?:string;
}

export type LoaderContainerProps = {
    [F in keyof LoaderContainerPropsMap]: LoaderContainerPropsMap[F]
}


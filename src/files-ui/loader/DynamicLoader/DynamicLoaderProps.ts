import { IconProps } from "../../icons/IconProps/IconProps";
import { LoaderProps } from "../LoaderProps";

export interface DynamicLoaderPropsMap extends IconProps, LoaderProps {
    percentage?: number;
    hidePerncentage?: boolean;
}

export type DynamicLoaderProps = {
    [L in keyof DynamicLoaderPropsMap]: DynamicLoaderPropsMap[L]
}
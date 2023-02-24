import { CSSProperties } from "react";

export interface IconProps {
    size?: "micro" | "small" | "semi-medium" | "medium" | "large"| "extra-large" | number;
    /**
     * main color for icon
     */
    color?: string;
    /**
     * background color for icon
     */
    colorFill?: string;
    /**
     * Function that is triggered when user click the icon.
     * If not provided, cursor wil be default
     */
    onClick?: Function;
    /**
     * style properties for icon
     */
    style?: CSSProperties;
    /**
     * A classname for stylesheet rules
     */
    className?: string;
}
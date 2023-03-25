import * as React from "react";
/**
 * Base props to override in all components
 * and take advantage of the
 * merging props characteristic
 */
export declare type OverridableComponentProps = {
    /**
     * The content of the component.
     */
    children?: React.ReactNode | string;
    /**
     * The in-line style object
     */
    style?: React.CSSProperties;
    /**
     * The classname to override the css styles
     * in .css or .sass file instead of using in-line styles
     */
    className?: string;
    /**
     * the color theme
     * in somecases is the background-color
     * in others is the text-color
     */
    color?: string;
    /**
     * The color of the text
     */
    textColor?: string;
};
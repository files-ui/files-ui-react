import * as React from "react";

/**
 * Custom hook that generates the final className for the main container of FleItem
 * @param resultOnTooltip whether to show the result on a tooltip or not
 * @returns the fiaal classNmae
 */
const useFileItemRootClassName = (
    resultOnTooltip: boolean = false,
    className: string | undefined,
    hovering: boolean | undefined = false
): string => {
    const [classNameCreated, setClassNameCreated] = React.useState<string>("file-item-full-container-container");

    React.useEffect(() => {
        let baseClassName: string = "file-item-full-container-container";
        if (resultOnTooltip) {
            baseClassName += " files-ui-tooltip";
        }
        if (hovering) {
            baseClassName += " hovering";
        }
        if (className) {
            baseClassName += ` ${className}`;
        }

        setClassNameCreated(baseClassName);
    }, [resultOnTooltip, className, hovering]);
    return classNameCreated;
}
export default useFileItemRootClassName;
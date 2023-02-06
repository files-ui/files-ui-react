import * as React from "react";
import { FileItemPropsNeo } from "../components/FileItem/FileItemPropsNeo";
/**
 * Custom hook that generates the final className for main container
 * on FleItem
 * @param resultOnTooltip whether to show the result on tooltip or not
 * @param elevation the shadow elevation
 * @returns the fiaal classNmae
 */
const useFileItemNeoClassName = (
    resultOnTooltip: boolean,
    elevation: FileItemPropsNeo["elevation"]
): string => {
    const [classNameCreated, setClassNameCreated] =
     React.useState<string>("");

    React.useEffect(() => {
        let baseClassName: string = 
        "file-item-full-container-container";
        
        if (resultOnTooltip) {
            baseClassName += " dz-ui-tooltip";
        }
        if (elevation && [1, 2, 3, 4, "1", "2", "3", "4"].includes(elevation)) {
            baseClassName += ` dz-ui-paper-elevation-${elevation}`;
        }
        setClassNameCreated(baseClassName);
    }, [resultOnTooltip]);
    return classNameCreated;
}
export default useFileItemNeoClassName;
import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";
import { dropLayerDynamicStyle } from "../utils/dropLayerDynamicStyle";

const DROP_LAYER_STYLE_ID: string = "files-ui-styles-drop-layer";
/**
 * 
 * @param color 
 * @param isDragging 
 * @param makeClassName whether to make the classname or not
 * @returns the classname for layer
 */
const useDropLayerClassName = (
    color?: string,
    isDragging?: boolean,
    makeClassName?: boolean
): string => {
    const [idStyles, setIdStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [classNameCreated, setClassNameCreated] = React.useState<string>("");

    React.useEffect(() => {
        //console.log("useDropLayerClassName", color, isDragging, makeClassName);

        const handleInserStyle = (
            color: string,
            isDragging?: boolean
        ) => {
            let finalClassName: string = "";
            let styleSheet: DynamicSheet = dropLayerDynamicStyle(DROP_LAYER_STYLE_ID, color);
            let idStyle: string = "";

            if (!styleInjected) {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            } else {
                //already a stylesheet associated
                DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            }
            finalClassName += `dropzone-ui-layer`;

            if (isDragging) {
                finalClassName += ` dui-layer-drag`;
            }
            setClassNameCreated(finalClassName);
        };

        //console.log("=>", isDragging);

        if (makeClassName) {
            handleInserStyle(color as string, isDragging);
        }

        // eslint-disable-next-line
    }, [color, isDragging, makeClassName]);

    return classNameCreated;
}
export default useDropLayerClassName;
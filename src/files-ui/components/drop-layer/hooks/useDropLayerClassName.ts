import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";
import { makeDropLayerDynamicStyle } from "../utils/dropLayerDynamicStyle";

const BASE_DROP_LAYER_STYLE: string = "files-ui-styles-drop-layer";


/**
 * 
 * @param color 
 * @param isDragging 
 * @param makeClassName whether to make the classname or not
 * @returns the classname for layer
 */
const useDropLayerClassName = (
    dropzoneId: string,
    color?: string,
    //isDragging?: boolean,
    makeClassName?: boolean
): string => {
    const [idStyles, setIdStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [classNameCreated, setClassNameCreated] = React.useState<string>("");

    const finalDropzoneId: string = (color === undefined) ? "default" : dropzoneId.replaceAll(":", "_");


    React.useEffect(() => {
        //console.log("useDropLayerClassName", color, isDragging, makeClassName);

        const handleInserStyle = (
            color?: string,
            //isDragging?: boolean
        ) => {
            let finalClassName: string = "";
            let styleSheet: DynamicSheet = makeDropLayerDynamicStyle(finalDropzoneId, color
                //isDragging
            );
            let idStyle: string = "";

            console.log("useDropLayerClassName handleInserStyle", color, styleSheet);


            if (finalDropzoneId === "default" && !styleInjected) {
                //check if already inserted
                if (DynamiCSS.existStyleSheet(finalDropzoneId)) {
                    setStyleInjected(true);
                    setIdStyles(idStyle);

                } else {
                    idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                    setIdStyles(idStyle);
                    if (idStyle !== "") {
                        setStyleInjected(true);
                    }
                }
            } else if (!styleInjected) {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            } else {
                //already a stylesheet associated
                DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            }
            finalClassName += `dropzone-layer-${finalDropzoneId}`;

            /*  if (isDragging) {
                 finalClassName += ` dropzone-layer-drag`;
             } */
            setClassNameCreated(finalClassName);
        };

        //console.log("=>", isDragging);

        if (makeClassName) {
            handleInserStyle(color,
                //  isDragging
            );
        }

        // eslint-disable-next-line
    }, [color,
        // isDragging,
        makeClassName]);

    return classNameCreated;
}
export default useDropLayerClassName;
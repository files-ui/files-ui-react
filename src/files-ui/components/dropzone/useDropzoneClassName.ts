import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";
import { asureColor, colourNameToHex, hexColorToRGB } from "../../core";

export default function useDropzoneClassName(
    className: string | undefined,
    isDragging: boolean,
    header: boolean | undefined = false,
    footer: boolean | undefined = false,
    color: string | undefined,
    backgroundColor: string | undefined,
    minHeight: string | number | undefined
): string | undefined {
    //console.log("useDropzoneClassName", className, isDragging, header, footer, color, backgroundColor, minHeight);
    const baseClassName: string = "fui-dropzone-root fui-dropzone-border";
    const [idStyles, setIdStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [finalClassName, setFinalClassName] = React.useState<string | undefined>(undefined);

    const [offset, setOffset] = React.useState<number>(0);

    const makeClassName = (
        className: string | undefined,
        isDragging: boolean,
        // offset: number,
        color: string | undefined,
        backgroundColor: string | undefined,
        minHeight: string | number | undefined

    ) => {
        let finalClassName: string = baseClassName;

        let styleSheet: DynamicSheet = makeDynamicDropzoneStyleSheet(
            // offset,
            color,
            backgroundColor,
            minHeight
        );
        let idStyle: string = "";
        if (!styleInjected) {
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            setIdStyles(idStyle);
            if (idStyle !== "")
                setStyleInjected(true);
        } else {
            //already a stylesheet associated
            DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
        }
        
        finalClassName += ` files-ui-dropzone-extra`;
        if (className) {
            finalClassName = `${finalClassName} ${className}`;
        }
        if (isDragging) {
            finalClassName = `${finalClassName} fui-hide-border`;
        }
        setFinalClassName(finalClassName);
    }

    React.useEffect(() => {
        makeClassName(className, isDragging,
            //offset, 
            color, backgroundColor, minHeight);

    }, [className, isDragging,
        // offset, 
        color, backgroundColor, minHeight]);

    React.useEffect(() => {
        setOffset(header && footer ? 50 : !header && footer ? 23 : header && !footer ? 22 : 0);
    }, [header, footer]);

    return finalClassName;

}




const makeDynamicDropzoneStyleSheet = (
    // offset: number,
    color: string | undefined,
    backgroundColor: string | undefined,
    minHeight: string | number | undefined
): DynamicSheet => {
    return {
        id: "files-dropzone-ui-style-id",
        sheetRules: [
            {
                className: `files-ui-dropzone-extra`,
                rules: {
                    border: `1px dashed ${hexColorToRGB(
                        asureColor(colourNameToHex(color)),
                        1
                    )}`,
                    borderRadius: "8px",
                    backgroundColor: backgroundColor,
                    minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
                },
            }
        ],
    }
}
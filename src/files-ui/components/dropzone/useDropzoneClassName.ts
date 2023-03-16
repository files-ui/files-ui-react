import { DynamicSheet, DynamicSheetRule, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";
import { completeAsureColor } from "../../core";
import { DEFAULT_BORDER_RADIUS } from "./components/dropzone/DropzoneProps";

export default function useDropzoneClassName(
    dropzoneId: string,
    className: string | undefined,
    isDragging: boolean,
    //header: boolean | undefined = false,
    //footer: boolean | undefined = false,
    color: string | undefined,
    //borderRadius: string | number | undefined,
    background: string | undefined,
    minHeight: string | number | undefined
): [string | undefined, string | undefined, string | undefined] {
    //console.log("useDropzoneClassName", className, isDragging, header, footer, color, background, minHeight);
    const finalDropzoneId: string = (color === undefined && background === undefined && minHeight === undefined) ? "default" : dropzoneId.replaceAll(":", "_");

    const baseClassName: string = "fui-dropzone-root fui-dropzone-border";

    const [idStyles, setIdStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [finalClassName, setFinalClassName] = React.useState<string | undefined>(undefined);
    const [finalClassNameHeader, setFinalClassNameHeader] = React.useState<string | undefined>(undefined);
    const [finalClassNameFooter, setFinalClassNameFooter] = React.useState<string | undefined>(undefined);

    //const [offset, setOffset] = React.useState<number>(0);

    const makeClassName = (
        className: string | undefined,
        isDragging: boolean,
        // offset: number,
        color: string | undefined,
        //borderRadius: string | number | undefined,
        background: string | undefined,
        minHeight: string | number | undefined

    ) => {
        let finalClassName: string = baseClassName;

        // better to come back to the custom stylesheet for each dropzone with the unique id

        let styleSheet: DynamicSheet = makeDynamicDropzoneStyleSheet(
            finalDropzoneId,
            // offset,
            isDragging,
            color,
            background,
            minHeight,
            //borderRadius
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

        finalClassName += ` files-ui-dropzone-extra-${finalDropzoneId}`;

        if (className) {
            finalClassName = `${finalClassName} ${className}`;
        }
        if (isDragging) {
            finalClassName = `${finalClassName} fui-hide-border`;
        }

        setFinalClassName(finalClassName);
        setFinalClassNameHeader(`files-ui-header-border-rd-${finalDropzoneId}`);
        setFinalClassNameFooter(`files-ui-footer-border-rd-top-bg-color-${finalDropzoneId}`);
    }

    React.useEffect(() => {
        makeClassName(className, isDragging,
            //offset, 
            color,
            // borderRadius, 
            background, minHeight);
        // eslint-disable-next-line
    }, [className, isDragging,
        // offset, 
        color,
        //borderRadius, 
        background, minHeight]);

    return [finalClassName, finalClassNameHeader, finalClassNameFooter];
}




const makeDynamicDropzoneStyleSheet = (
    dropzoneId: string,
    // offset: number,
    isDragging: boolean,
    color: string | undefined,
    background: string | undefined,
    minHeight: string | number | undefined,
    // borderRadius: string | number | undefined,
): DynamicSheet => {

    const rootColorBorderStyle: DynamicSheetRule = {
        className: `files-ui-dropzone-extra-${dropzoneId}`,
        rules: {
            color: completeAsureColor(color),
            border: `1px dashed ${isDragging ? "transparent" : completeAsureColor(color)}`,
            borderRadius: DEFAULT_BORDER_RADIUS,
            background: background,
            minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
        },
    };

    const headerBorderStyle: DynamicSheetRule = {
        className: `files-ui-header-border-rd-${dropzoneId}`,
        rules: {
            "border-top-left-radius": DEFAULT_BORDER_RADIUS,
            "border-top-right-radius": DEFAULT_BORDER_RADIUS,
        },
    };
    const footerBorderStyle: DynamicSheetRule = {
        className: `files-ui-footer-border-rd-top-bg-color-${dropzoneId}`,
        rules: {
            "border-bottom-left-radius": DEFAULT_BORDER_RADIUS,
            "border-bottom-right-radius": DEFAULT_BORDER_RADIUS,
            background: completeAsureColor(color, 0.129),
            borderTop: `1px dotted ${completeAsureColor(color)}`

        },
    };
    const sheetRules: DynamicSheetRule[] = [rootColorBorderStyle];

    if (footerBorderStyle !== undefined) {
        sheetRules.push(footerBorderStyle);
    }
    if (headerBorderStyle !== undefined) {
        sheetRules.push(headerBorderStyle);
    }

    return {
        id: "files-dropzone-ui-style-id-" + dropzoneId,
        sheetRules: sheetRules
    }
}
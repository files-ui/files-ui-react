import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";
import InputButtonStyleManager from "../utils/MaterialButtonStyleManager";

const useMaterialButtonClassName = (
    variant?: "contained" | "text" | "outlined",
    disabled?: boolean,
    color?: string,
    textColor?: string,
    textDecoration?: "uppercase" | "capitalize" | "lowercase" | "none",
    className?: string,
    idClassName?: number | string,
    resetStyles?: boolean
): string | undefined => {

    const baseClassName: string = "material-button-root material-button";



    const [idStyles, setIdStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [finalClassName, setFinalClassName] = React.useState<string | undefined>(undefined);


    //const [nextClassName, setNextClassName] = React.useState<number>(0);




    const handleInserStyle = (
        idClassName: number | string | undefined,
        variant?: "contained" | "text" | "outlined",
        disabled?: boolean,
        color?: string,
        textDecoration?: "uppercase" | "capitalize" | "lowercase" | "none",
        textColor?: string,
    ) => {
        let finalClassName: string = baseClassName;

        let styleSheet: DynamicSheet = InputButtonStyleManager.makeDynamicStyle(
            idClassName,
            variant,
            disabled,
            color,
            textColor,
            textDecoration
        );

        let idStyle: string = "";
        if (!styleInjected) {
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            console.log("DynamiCSS insert", idStyle);
            setIdStyles(idStyle);
            if (idStyle !== "")
                setStyleInjected(true);
        } else {
            //already a stylesheet associated
            DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            console.log("DynamiCSS edit", idStyle);

        }


        //let finalClassName = `material-button-root material-button `;
        if (!disabled) {
            //finalClassName += `${variant} ${variant}-${nextClassName}`;
            finalClassName += ` ${variant} ${variant}-${idClassName}`;
        } else {
            finalClassName += ` disabled`;
        }
        //classname to override styles in stylesheet
        if (className && className.length > 0) {
            finalClassName += ` ${className}`;
        }
        //some text in className
        if (textDecoration) {
            const finalTextDecoration: string =
                textDecoration &&
                    ["uppercase", "capitalize", "lowercase", "none"].includes(textDecoration?.toLowerCase()) ? textDecoration.toLowerCase() : "uppercase";
            finalClassName += ` ${finalTextDecoration}`;
        }
        setFinalClassName(finalClassName);
    };



    React.useEffect(() => {
        if (!resetStyles)
            handleInserStyle(idClassName, variant, disabled, color, textDecoration, textColor);

        // eslint-disable-next-line
    }, [variant, disabled, color, textDecoration, textColor, className, idClassName, resetStyles]);


    const removeStyle = (styleInjected: boolean, idStyles: string) => {
        //console.log("DynamiCSS removing", styleInjected, idStyles);
        if (styleInjected) {
            const res = DynamiCSS.removeStyleSheet(idStyles);
            //console.log("DynamiCSS removing res", res);

            setStyleInjected(false);
            setIdStyles("");
        }
    };

    React.useEffect(() => {
        return () => removeStyle(styleInjected, idStyles);
        // eslint-disable-next-line
    }, [styleInjected, idStyles]);


    return finalClassName;
}
export default useMaterialButtonClassName;




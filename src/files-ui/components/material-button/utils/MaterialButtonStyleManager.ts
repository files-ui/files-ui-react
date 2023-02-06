import { asureColor, colourNameToHex, darkerColor, hexColorToRGB } from "../../../core";
import { DynamicSheet, DynamicSheetRule } from "@dynamicss/dynamicss";

export default class MaterialButtonStyleManager {
    static nextButtonClassNameNumber = 0;
    /**
     * Increases the count and retrieves the next number
     * @returns the next static number in styles
     */
    static getNextId(): number {
        MaterialButtonStyleManager.nextButtonClassNameNumber++;
        console.log("Id called " + MaterialButtonStyleManager.nextButtonClassNameNumber);
        return MaterialButtonStyleManager.nextButtonClassNameNumber;
    }
    /**
     * 
     * @param idClassName identifyer
     * @param variant the variant of the button
     * @param disabled disabled prop
     * @param color the theme color
     * @param textColor the text color
     * @returns a DynamicSheet
     */
    static makeDynamicStyle = (
        idClassName: number | string | undefined,
        variant?: string,
        disabled?: boolean,
        color?: string,
        textColor?: string,
        //textDecoration?: string
        //nextClassName?: number
    ): DynamicSheet => {
        //([{ variant, disabled, color, textColor, nextClassName }]);
        let styleSheet: DynamicSheet = {
            id: `material-button-styles-${idClassName}`,
            // id: `dui-button-styles`,
            sheetRules: [
                {
                    className: `material-button.${variant}-${idClassName}`,
                    //className: `dui-button.${variant}`,
                    rules: {},
                },
                {
                    className: `material-button-root.${variant}-${idClassName}`,
                    // className: `dui-button-root.${variant}`,
                    rules: {},
                }
            ],
        };
        let sheetRules: DynamicSheetRule[] = styleSheet.sheetRules as DynamicSheetRule[];


        if (!disabled) {
            switch (variant) {
                case "contained":
                    sheetRules[0].rules = {
                        color: asureColor(colourNameToHex(textColor)),
                        backgroundColor: hexColorToRGB(
                            asureColor(colourNameToHex(color)),
                            1
                        ),
                        //textDecoration: finalTextDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            backgroundColor: darkerColor(
                                hexColorToRGB(
                                    asureColor(colourNameToHex(color)),
                                    1
                                )
                            ),
                        },
                    };
                    break;
                case "outlined":
                    sheetRules[0].rules = {
                        border: `1px solid ${hexColorToRGB(
                            asureColor(colourNameToHex(color)),
                            0.5
                        )}`,
                        color: asureColor(colourNameToHex(color)),
                        backgroundColor: "transparent",
                        //textDecoration: finalTextDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            border: `1px solid ${hexColorToRGB(
                                asureColor(colourNameToHex(color)),
                                1
                            )}`,
                            backgroundColor: hexColorToRGB(
                                asureColor(colourNameToHex(color)),
                                0.085
                            ),
                        },
                    };
                    break;
                case "text":
                    sheetRules[0].rules = {
                        color: asureColor(colourNameToHex(color)),
                        backgroundColor: "transparent",
                        //textDecoration: finalTextDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            backgroundColor: hexColorToRGB(
                                asureColor(colourNameToHex(color)),
                                0.085
                            ),
                        },
                    };
                    break;
            }
        }
        styleSheet.sheetRules = sheetRules;
        return styleSheet;
    }
}
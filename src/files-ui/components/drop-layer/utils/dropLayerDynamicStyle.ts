import { asureColor, colourNameToHex, hexColorToRGB } from "../../../core";

export const dropLayerDynamicStyle = (styleId:string, color: string | undefined) => {

    return {
        id: "files-ui-styles-drop-layer",
        sheetRules: [
            {
                className: `dropzone-ui-layer`,
                rules: {
                    backgroundColor: hexColorToRGB(
                        asureColor(colourNameToHex(color)),
                        0.4
                    ),
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0%",
                    height: "0%",
                    border: `2px dashed ${hexColorToRGB(
                        asureColor(colourNameToHex(color)),
                        1
                    )}`,
                    zIndex: 20,
                },
            },
            {
                className: `dui-layer-drag`,
                rules: {
                    width: "100%",
                    height: "100%",
                },
            }
        ],
    }
};
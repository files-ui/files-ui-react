import { completeAsureColor } from "../../../core";
import { DEFAULT_BORDER_RADIUS } from "../../dropzone/components/dropzone/DropzoneProps";

export const dropLayerDynamicStyle = (styleId: string, color: string | undefined, isDragging: boolean | undefined) => {

    return {
        id: "files-ui-styles-drop-layer",
        sheetRules: [
            {
                className: `dropzone-ui-layer`,
                rules: {

                    backgroundColor:
                        completeAsureColor(color, 0.4),
                    borderRadius: DEFAULT_BORDER_RADIUS,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0%",
                    height: "0%",
                    border: isDragging ? `2px dashed ${completeAsureColor(color, 1)}` : undefined,
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
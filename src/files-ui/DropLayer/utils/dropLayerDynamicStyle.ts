import { completeAsureColor } from "../../core";
import { DEFAULT_BORDER_RADIUS } from "../../Dropzone/components/dropzone/DropzoneProps";


export const makeDropLayerDynamicStyle = (
    dropzoneId: string,
    color: string | undefined,
) => {
    return {
        id: "files-ui-drop-layer-style-id-" + dropzoneId,
        sheetRules: [
            {
                className: `dropzone-layer-${dropzoneId}`,
                rules: {
                    backgroundColor: completeAsureColor(color, 0.4),
                    borderRadius: DEFAULT_BORDER_RADIUS,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0%",
                    height: "0%",
                    zIndex: 20,
                    border: `0px dashed ${completeAsureColor(color)}`
                },
            },
            {
                className: `dropzone-layer-drag`,
                rules: {
                    width: "100%",
                    height: "100%",
                    borderWidth:"2px"
                },
            }
        ],
    }
};
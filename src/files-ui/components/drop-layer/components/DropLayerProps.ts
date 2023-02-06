import { OverridableComponentProps } from "../../overridable";
import * as React from "react";
export interface DropLayerPropsMap extends OverridableComponentProps {
    onDragLeave?: React.DragEventHandler<HTMLDivElement>;
    onDrop?: React.DragEventHandler<HTMLDivElement>;
    open?: boolean;
}

export type DropLayerProps = {
    [D in keyof DropLayerPropsMap]: DropLayerPropsMap[D]
}
import { Localization, UPLOADSTATUS } from "../../../core";

export interface FileMosaicUploadLayerPropsMap {
    visible?: boolean;
    uploadStatus?: UPLOADSTATUS;
    onCancel?: Function;
    onAbort?: Function;
    progress?: number;
    localization?:Localization;
}

export type FileMosaicUploadLayerProps = {
    [T in keyof FileMosaicUploadLayerPropsMap]: FileMosaicUploadLayerPropsMap[T]
}
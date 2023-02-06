import { Localization, UPLOADSTATUS } from "../../../../core";

export interface FileMosaicInfoLayerProps{
    valid: boolean | null | undefined;
    uploadStatus?: UPLOADSTATUS;
    localization?: Localization;

    onCloseInfo?:Function;

    localName: string;
    sizeFormatted: string;
    localType?: string;
}
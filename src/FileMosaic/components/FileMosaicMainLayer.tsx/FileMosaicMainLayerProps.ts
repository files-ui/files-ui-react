import { Localization, UPLOADSTATUS } from "theamazingunkowntext"

export interface FileMosaicMainLayerProps {
    darkMode?: boolean;
    deleteIcon?: boolean;
    onDelete?: Function;


    valid: boolean | null | undefined;
    uploadStatus?: UPLOADSTATUS;
    localization?: Localization;

    sizeFormatted?: string;

    imageIcon: boolean;
    onSee: ((imageSource: string | undefined) => void) | undefined;

    videoIcon: boolean;
    onWatch: ((videoSource: File | undefined) => void) | undefined;

    downloadIcon: boolean;
    onDownload: Function | undefined;

    infoIcon: boolean;
    onOpenInfo: Function | undefined;

    isActive?: boolean;
}
import { Localization, UPLOADSTATUS } from "@files-ui/core"

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

    editIcon: boolean;
    onEdit: (() => void) | undefined;

    infoIcon: boolean;
    onOpenInfo: Function | undefined;

    /**
     * Multiplier applied to action icon sizes.
     * @default 1
     */
    sizeMultiplier?: number;

    isActive?: boolean;
}
import { FileMosaicPropsMap } from "../FileMosaic/components/file-mosaic/FileMosaicProps";


export interface FileCardPropsMap extends FileMosaicPropsMap {
    elevation?: false | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
    | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24";
}


export type FileCardProps = {
    [F in keyof FileCardPropsMap]: FileCardPropsMap[F]
}

/**
 * Base default props
 */
export const FileCardPropsDefault: FileCardProps = {
    onDelete: undefined,
    file: undefined,
    color: "#071e25",
    //  validator: undefined,
    id: undefined,
    style: {},
    preview: false,
    valid: undefined,
    info: false,
    //hd: undefined,
    localization: "EN-en",
    //onlyImage: false,
    imageUrl: undefined,
    errors: undefined,
    elevation: 2,
    alwaysActive: undefined,
    progress: undefined,
    resultOnTooltip: true,
    backgroundBlurImage: true,
    darkMode: false,
    //fileName: "bottom"
}

import { ExtFile, ExtFileInstance } from "@files-ui/core";

export const isThereValidUrl = (
    url?: string,
    urlFunction?: Function,
    extFileList?: ExtFile[]
): boolean => {
    return ExtFileInstance.someValidUrl(extFileList) && url && url.length && urlFunction != undefined;
}
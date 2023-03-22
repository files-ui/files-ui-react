/**
 * Gives a XX.XX format in Bytes KB, MB, GB or TB
 * @param fileSize file size to give format in Bytes
 */
 export const fileSizeFormater = (fileSize?: number | false): string| undefined => {
    let result = "";
    if (!fileSize) {
        return undefined;
    }
    if (fileSize < 1024) {
        result = fileSize + " Bytes"
    } else {
        //KB
        if (fileSize < 1024 * 1024) {
            result = (fileSize / 1024).toFixed(2) + " KB";
        } else if (fileSize < 1024 * 1024 * 1024) {
            result = ((fileSize / 1024) / 1024).toFixed(2) + " MB";
        } else if (fileSize < 1024 * 1024 * 1024 * 1024) {
            result = (((fileSize / 1024) / 1024) / 1024).toFixed(2) + " GB";
        } else {
            result = ((((fileSize / 1024) / 1024) / 1024) / 1024).toFixed(2) + " TB";
        }
    }
    return result;
}
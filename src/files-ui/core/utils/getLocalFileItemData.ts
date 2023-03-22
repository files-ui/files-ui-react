/**
 * 
 * @param file 
 * @param name 
 * @param type 
 * @param size 
 * @returns the file name, type and size
 */
export const getLocalFileItemData = (
    file: File | undefined,
    name: string | undefined,
    type: string | undefined,
    size: number | undefined
): [string, string | undefined, number | undefined] => {

    let localFileName: string = "";
    let localFileType: string | undefined = undefined;
    let localFileSize: number | undefined = undefined;

    // if file object is valid, obtain metadata from it
    // otherwise try to get file data from individual props in string format
    if (file && typeof file.name === "string") {
        localFileName = file.name;
        localFileType = file.type;
        localFileSize = file.size;
    } else if (name && typeof name === "string") {
        localFileName = name;
        localFileType = type;
        localFileSize = size;
    }
    return [localFileName, localFileType, localFileSize]
}
/**
 * Looks for the first file extension
 * @param fileName file name
 * @returns the file name extension
 */
 export const getExt = (fileName: string): string => {
    const re = /(?:\.([^.]+))?$/;
    const result = re.exec(fileName);
    if (result) {
        return result[1];
    } else {
        return "";
    }

};
/**
 * Checks wheter the file objector at least the file name was given in order to show the file Item component
 * @param file the file object
 * @param name the file name
 * @returns true if the file object or the file name were given and are strings
 */
export const showFileItemComponent = (
    file: File | undefined,
    name: string | undefined,
    //classNameCreatedReady: boolean
): boolean => {

    let result = false;
    if (file && typeof file.name === "string" 
    //&& classNameCreatedReady
    ) {
        result = true;
    }
    if (!result && name && typeof name == "string"
     //&& classNameCreatedReady
     ) {
        result = true;
    }
    //console.log("showFileItemComponent", file, name, classNameCreatedReady, result);
    return result;
}
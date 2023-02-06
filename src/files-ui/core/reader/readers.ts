/**
 * Reads an image (or other type) file as data URL in a promise way, 
 * so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File or Blob object
 * @returns data URL of the file
 */
export const readAsDataURL = (file: File | Blob): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result as string);
            }
            reader.readAsDataURL(file);
        } catch (error) {
            reject(undefined);
        }
    });
}



/**
 * Reads a file as Text in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns data text of the file
 */
export const readAsText = (file: File | Blob, encoding?: string): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result as string);
            }
            reader.readAsText(file, encoding ? encoding : "base64");
        } catch (error) {
            reject(undefined);
        }
    });
}



/**
 * Reads a file and return the raw binary data from the file. 
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns raw binary data of the file
 */
export const readAsBinaryString = (file: File | Blob): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result as string);
            }
            reader.readAsBinaryString(file);
        } catch (error) {
            reject(undefined);
        }
    });
}

/**
 * Reads a file and returns an ArrayBuffer representing the file's data 
 * @param file File or blob object
 * @param encoding The type of encoding such as "base64"
 * @returns ArrayBuffer representation of the file
 */
export const readAsArrayBuffer = (file: File | Blob): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result as string);
            }
            reader.readAsArrayBuffer(file);
        } catch (error) {
            reject(undefined);
        }
    });
}
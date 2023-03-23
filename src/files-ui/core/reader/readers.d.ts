/**
 * Reads an image (or other type) file as data URL in a promise way,
 * so you can use await.
 * It will return a string that contains the URL representation
 * @param file File or Blob object
 * @returns data URL of the file
 */
export declare const readAsDataURL: (file: File | Blob, onProgress?: Function, onError?: Function) => Promise<string | undefined>;
/**
 * Reads a file as Text in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns data text of the file
 */
export declare const readAsText: (file: File | Blob, encoding?: string, onProgress?: Function, onError?: Function) => Promise<string | undefined>;
/**
 * Reads a file and return the raw binary data from the file.
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns raw binary data of the file
 */
export declare const readAsBinaryString: (file: File | Blob, onProgress?: Function, onError?: Function) => Promise<string | undefined>;
/**
 * Reads a file and returns an ArrayBuffer representing the file's data
 * @param file File or blob object
 * @param encoding The type of encoding such as "base64"
 * @returns ArrayBuffer representation of the file
 */
export declare const readAsArrayBuffer: (file: File | Blob, onProgress?: Function, onError?: Function) => Promise<string | undefined>;

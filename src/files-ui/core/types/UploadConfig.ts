import { Method } from "./method"

export type UploadConfig = {
    /**
     * The url endpoint to upload the file.
     * e.g. https://www.myasomwbackend/uploads/file
     */
    url?: string;
    /**
     * upload method, can be POST | PUT | PATCH
     * @default "POST"
     */
    method?: Method;
    /**
     * Request headers for http request.
     * e.g.
     * ```jsx
     * headers = { 
     *    "content-type": "multipart/form-data",
     *    Authorization: "Bearer YOUR_BEARER_TOKEN_GOES_HERE",
     * } 
     * ```
     */
    headers?: Record<string, string>;
    /**
     * the label to use in request
     * On server this must be the label to get the file.
     * @default "file"
     */
    uploadLabel?: string;
    /**
     * Flag for indicating whther to remove the non-valid files
     * before starting the upload process.
     * This flag is valid only if validation is enable
     */
    cleanOnUpload?: boolean;
    /**
     * If true, onDrop event or file selection not only will make Dropzone to return the list of files, but also
     * it will start the upload stage for the files if at least url was set
     * By default is false
     */
    autoUpload?: boolean;
    /**
     * The time that will last the "preparing" stage
     * By default is 1500 miliseconds = 1.5 seconds
     */
    preparingTime?: number;
    /**
     * A message to show in the footer when the uploading process takes place.
     */
    uploadingMessage?: string;
}

export const createUploadConfig = (
    url?: string,
    method?: Method,
    headers?: Record<string, string>,
    uploadLabel?: string,
    cleanonUpload?: boolean
) => {
    return {
        url,
        method,
        headers,
        uploadLabel,
        cleanonUpload
    }
}
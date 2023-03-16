import { ExtFile, Method, UPLOADSTATUS } from "../types";
import { ServerResponse, UploadResponse } from "../types/uploadTypes";
import addExtraDataUpload from "./addExtraData.upload";
import addHeaders from "./addheaders.upload";
import { ABORTED_ERROR_RESPONSE, NO_XHR_PROVIDED_ERROR, TIMEOUT_ERROR_RESPONSE, UNEXPECTED_ERROR_RESPONSE } from "./errors.upload";
import { JsonParseResponse, makeErrorUploadResponse, makeSuccessUploadResponse } from "./response.upload";
import { completeUploadResult, unableToUploadResult } from "./utils.upload";


/**
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data upload
 * @param headers the set of headers
 * @returns a server response that consists on {status, payload, message}
 */
export const uploadFormData = (
    xhr: XMLHttpRequest,
    method: Method | undefined = "POST",
    endpoint: string,
    data: FormData,
    headers: Record<string, string> | undefined
) => {
    return new Promise<ServerResponse>((resolve, reject) => {
        console.log("Fui_uploadFormData uploadFile", xhr, method, endpoint, data, headers);

        const finalMethod: Method = ["POST", "PUT", "PATCH"].includes(method.toUpperCase()) ? method : "POST";

        let lastLastState: number = -1;
        let lastState: number = 0;
        let jumped: boolean = false;

        xhr.upload.onload = () => {
            console.log("Fui_uploadFormData uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = () => resolve(TIMEOUT_ERROR_RESPONSE);
        xhr.upload.onabort = () => {
            console.log("Fui_uploadFormData ABORTEEEEDDDD");
            resolve(ABORTED_ERROR_RESPONSE);
        };
        xhr.onloadend = async (e) => {
            console.log("onloadend loaded", e.loaded);
            console.log("onloadend total", e.total);
            console.log("onloadend lengthComputable", e.lengthComputable);

        }
        // listen for `progress` event
        //currently listening on FileItem component hook
        xhr.onreadystatechange = async (e) => {
            //console.log("Finished", xhr);

            console.log("Fui_uploadFormData uploadFile onreadystatechange e.type", e.type);
            console.log("Fui_uploadFormData uploadFile onreadystatechange", xhr.readyState, xhr.response);

            lastLastState = lastState;
            lastState = xhr.readyState;

            if (xhr.readyState === 4) {
                if (xhr.response !== "") {
                    //there is th answer
                    resolve(JsonParseResponse(xhr));
                } else {
                    //error unexpected
                    console.log("Fui_uploadFormData EMPTY status", xhr.status);
                    console.log("Fui_uploadFormData EMPTY readyState", xhr.readyState);
                    console.log("Fui_uploadFormData EMPTY upload", xhr.upload);
                    //console.log("Fui_uploadFormData EMPTY abort", xhr.abort);
                    //const jumped = lastLastState - lastLastState !== 1;
                    resolve(ABORTED_ERROR_RESPONSE);

                }
            } else {
                console.log("Fui_uploadFormData FuiUpload NOT YET" + xhr.readyState);
            }
        };
        // open request
        xhr.open(finalMethod, endpoint, true);

        //add header to request
        addHeaders(xhr, headers);
        //start uploading
        xhr.send(data);
    });

};

/**
 * 
 * @param file the extended file to be uploaded
 * @param url the endpoint
 * @param method the method for uploading
 * @param headers headers for request
 * @returns 
 */
export const uploadExtFile = async (
    extFile: ExtFile,
    url: string,
    method?: Method,
    headers?: Record<string, string>,
    uploadLabel?: string,
): Promise<ExtFile> => {
    return new Promise(async (resolve, reject) => {
        try {
            const uploader: XMLHttpRequest | undefined = extFile.xhr;

            if (!uploader) {
                resolve(NO_XHR_PROVIDED_ERROR(extFile));
                return;
            }

            const localMethod: Method = method || "POST";
            const fileToUpload: File = extFile.file as File;

            const formData = new FormData();

            formData.append(uploadLabel || "file", fileToUpload);

            // add extra data to upload
            const finalExtraData: Record<string, any> =
                { otherValue: "other valueee haaaa", param2: { tecnica: "KIKOHUUUU", friend: "Chaos", age: 25 }, ...extFile.extraUploadData };

            addExtraDataUpload(formData, finalExtraData);
            console.log("FORMDATA", formData);

            let responseFui: ServerResponse;
            responseFui = await uploadFormData(
                uploader,
                localMethod,
                url,
                formData,
                headers || {});

            if (responseFui.success) {
                // status is true
                resolve(makeSuccessUploadResponse(extFile, responseFui));
            } else {
                // status is false
                resolve(makeErrorUploadResponse(extFile, responseFui));
            }
        } catch (error) {
            // on error
            console.log("uploadPromiseXHR uploadPromiseXHR ERROR", error);
            resolve(
                makeErrorUploadResponse(extFile, UNEXPECTED_ERROR_RESPONSE)
            );
        }
    });
};




export function uploadFile(
    file: File,
    url: string,
    method?: Method,
    label?: string,
    headers?: Record<string, string>
): Promise<ServerResponse> {
    return new Promise(async (resolve, reject) => {


        //start uploading
        const formData = new FormData();

        formData.append(label || "file", file);

        try {
            const serverResponse: ServerResponse = await uploadFormData(new XMLHttpRequest(), method, url, formData, headers);
            resolve(serverResponse);
        } catch (error) {
            // on error
            console.log("uploadPromiseXHR uploadPromiseXHR ERROR", error);
            resolve(UNEXPECTED_ERROR_RESPONSE);
        }
    });
}







/**
 * @deprecated
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data
 * @param headers the set of headers
 * @returns a dui server response that consists on {success, payload, message}
 */
export const FuiUpload = (
    xhr: XMLHttpRequest,
    method: Method,
    endpoint: string,
    data: FormData,
    headers: Record<string, string>
) => {
    return new Promise<ServerResponse>((resolve, reject) => {
        console.log("FuiUpload params", xhr, method, endpoint, data, headers);

        xhr.upload.onload = () => {
            console.log("FuiUpload onLoad", xhr.readyState, xhr.response);
        };

        xhr.upload.ontimeout = () => resolve(TIMEOUT_ERROR_RESPONSE);
        xhr.upload.onabort = () => resolve(ABORTED_ERROR_RESPONSE);

        // listen for `progress` event
        //currently listening on FileMosaic component hook

        xhr.onreadystatechange = async (e) => {
            //console.log("Finished", xhr);
            console.log("FuiUpload onreadystatechange", xhr.readyState, xhr.response, xhr);

            if (xhr.readyState === 4) {
                if (xhr.response !== "") {
                    //there is th answer
                    resolve(JsonParseResponse(xhr));
                } else {
                    //error unexpected
                    resolve(UNEXPECTED_ERROR_RESPONSE);
                }
            } else {
                console.log("FuiUpload NOT YET" + xhr.readyState);
            }
        };
        // open request
        xhr.open(method, endpoint, true);
        const headerKeys: string[] = Object.keys(headers);
        //const headerValues: string[] = Object.values(headers);
        for (let i = 0; i < headerKeys.length; i++) {
            console.log("FuiUpload  headers", headerKeys[i], headers[headerKeys[i]]);
            xhr.setRequestHeader(
                headerKeys[i],
                headers[headerKeys[i]]
            );
        }
        //start uploading
        xhr.send(data);
    });

};



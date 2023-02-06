import { ExtFile, ExtFileInstance, Method, UPLOADSTATUS } from "../types";
import { ServerResponse, UploadResponse } from "../types/uploadTypes";
export const makeServerResponse = (success: boolean, message: string, payload: any): ServerResponse => {
    const result: ServerResponse = { success: success, message: message, payload: payload } as ServerResponse;
    return result;
}
export function uploadFile(
    file: File,
    url: string,
    method?: Method,
    label?: string,
    headers?: Record<string, string>
): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
        let uploadResult: ServerResponse = makeServerResponse(false, "", {});
        const finalMethod: string = method && ["POST", "PUT", "PATCH"].includes(method.toLocaleLowerCase()) ? method : "POST";

        //XMLHttpRequest Object
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.upload.onload = () => {
            console.log("uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = () => {
            uploadResult = makeServerResponse(false, "Timeout error", {});
            resolve(uploadResult);
        };
        xhr.upload.onabort = () => {
            uploadResult = makeServerResponse(false, "Upload aborted", {});
            resolve(uploadResult);
        };
        xhr.onreadystatechange = async (e) => {
            console.log("uploadFile onreadystatechange", xhr.readyState, xhr.response);
            if (xhr.readyState === 4 && xhr.response !== "") {
                let fuiServerRes: ServerResponse;
                try {
                    const jsonResponse = JSON.parse(xhr.response);
                    const success: boolean = jsonResponse.success;
                    const message: string = jsonResponse.message;
                    const payload: any = jsonResponse.payload;

                    console.log("uploadFile ====> status", success);
                    console.log("uploadFile ====> message", message);
                    console.log("uploadFile ====> payload", payload);

                    fuiServerRes = {
                        success: typeof success === "boolean" ? success : false,
                        message: typeof message === "string" ? message : "Error on response",
                        payload: payload || {}
                    }
                    resolve(fuiServerRes);
                } catch (error) {
                    fuiServerRes = {
                        success: false,
                        message: "Unexpected error: " + error,
                        payload: {}
                    }
                    console.log("uploadFile ERROR", error);
                    resolve(fuiServerRes);
                }
            } else {
                console.log("uploadFile Naranjas Changed: ", xhr.readyState, xhr.response);
            }

        }
        // open request

        xhr.open(finalMethod, url, true);

        //headers
        const headerKeys: string[] = Object.keys(headers || {});
        //const headerValues: string[] = Object.values(headers);
        for (let i = 0; i < headerKeys.length && headers; i++) {
            console.log("uploadFile headers", headerKeys[i], headers[headerKeys[i]]);
            xhr.setRequestHeader(
                headerKeys[i],
                headers[headerKeys[i]]
            );
        }

        //start uploading
        const formData = new FormData();
        formData.append(label || "file", file);
        xhr.send(formData);
    });


}
export function uploadFormData(
    file: File,
    url: string,
    method?: Method,
    label?: string,
    headers?: Record<string, string>
): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
        let uploadResult: ServerResponse = { success: false, message: "", payload: {} };



        resolve(uploadResult);
    });
}

/**
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data upload
 * @param headers the set of headers
 * @returns a server response that consists on {status, payload, message}
 */
export const FilesUIUpload = (
    xhr: XMLHttpRequest,
    method: Method,
    endpoint: string,
    data: FormData,
    headers: Record<string, string>
) => {
    return new Promise<ServerResponse>((resolve, reject) => {
        console.log("uploadFile", xhr, method, endpoint, data, headers);

        xhr.upload.onload = () => {
            console.log("uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = () => {
            //onError("Timeout error");
            resolve(
                {
                    success: false,
                    message: "Timeout error",
                    payload: {}
                }
            );
        };

        xhr.upload.onabort = () => {
            resolve(
                {
                    success: false,
                    message: "Upload aborted",
                    payload: {}
                }
            );
        };
        // listen for `progress` event
        //currently listening on FileItem component hook
        xhr.onreadystatechange = async (e) => {
            //console.log("Finished", xhr);
            console.log("uploadFile onreadystatechange", xhr.readyState, xhr.response);
            if (xhr.readyState === 4 && xhr.response !== "") {
                let fuiServerRes: ServerResponse;
                try {
                    const jsonResponse = JSON.parse(xhr.response);
                    const success: any = jsonResponse.success;
                    const message: string = jsonResponse.message;
                    const payload: any = jsonResponse.payload;
                    console.log("uploadFile ====> status", success);
                    console.log("uploadFile ====> message", message);
                    console.log("uploadFile ====> payload", payload);

                    fuiServerRes = {
                        success: typeof success === "boolean" ? success : false,
                        message: typeof message === "string" ? message : "Error on response",
                        payload: payload || {}
                    }
                    resolve(fuiServerRes);
                } catch (error) {
                    fuiServerRes = {
                        success: false,
                        message: "Unexpected error",
                        payload: {}
                    }
                    console.log("uploadFile ERROR", error);
                    resolve(fuiServerRes);
                }
            } else {
                console.log("uploadFile Naranjas Changed to " + xhr.readyState);
            }
        };
        // open request
        xhr.open(method, endpoint, true);
        const headerKeys: string[] = Object.keys(headers);
        //const headerValues: string[] = Object.values(headers);
        for (let i = 0; i < headerKeys.length; i++) {
            console.log("uploadFile FuiUpload headers", headerKeys[i], headers[headerKeys[i]]);
            xhr.setRequestHeader(
                headerKeys[i],
                headers[headerKeys[i]]
            );
        }
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
export const uploadPromiseXHR = async (
    file: ExtFile,
    url: string,
    method: Method,
    headers?: Record<string, string>
): Promise<UploadResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const uploader: XMLHttpRequest | undefined = file.xhr;
            if (!uploader) {
                resolve(
                    {
                        uploadedFile:
                        {
                            ...file,
                            uploadMessage: "Unable to upload. xhr object was not provided",
                            uploadStatus: "error"
                        },

                        id: file.id,
                        serverResponse: {}

                    }
                );
                return;
            }

            const localMethod: Method = method || "POST";

            const fileToUpload: File = file.file as File;

            const formData = new FormData();

            formData.append("file", fileToUpload);
            formData.append("otherValue", "HAAAAAAAAAAAAAAa");

            console.log("FORMDATA", formData);
            let responseFui: ServerResponse;
            //stablish events    
            responseFui = await FilesUIUpload(
                uploader,
                localMethod,
                url,
                formData,
                headers || {});


            if (responseFui.success) {
                // status is true
                resolve(
                    {
                        id: file.id,
                        serverResponse: responseFui,
                        uploadedFile:
                        {
                            ...file,
                            uploadMessage: responseFui.message,
                            uploadStatus: "success"
                        },


                    }

                );
            } else {
                // status is false
                resolve(
                    {
                        id: file.id,
                        serverResponse: responseFui,
                        uploadedFile:
                        {
                            ...file,
                            uploadMessage: responseFui.message,
                            uploadStatus: "error"
                        },


                    }
                );
            }
        } catch (error) {
            // on error
            console.log("uploadPromiseXHR uploadPromiseXHR ERROR", error);
            resolve(
                {
                    id: file.id,
                    serverResponse: {},
                    uploadedFile:
                    {
                        ...file,
                        uploadMessage: "Unexpected error",
                        uploadStatus: "error"
                    },



                }
            );
        }
    });
};


/// refactorizar, entregar solamente
///input: file o formData, url, method, headers y label on backend
// {payload, success, message:str}


export const unexpectedErrorUploadResult = (extFile: ExtFile): UploadResponse => {
    return {
        id: extFile.id,
        uploadedFile:
        {
            ...extFile,
            uploadMessage: "Unable to upload. xhr object was not provided",
            uploadStatus: "error"
        },
        serverResponse: {
        }
    }
}
export const unableToUploadResult = (
    extFile: ExtFile
): UploadResponse => {
    return {
        id: extFile.id,
        uploadedFile: {
            ...extFile,
            uploadMessage: "Unable to upload. XHR was not provided",
            uploadStatus: "error"
        },
        serverResponse: {
        }
    }
}
export const completeUploadResult = (
    extFile: ExtFile,
    serverResponse: ServerResponse,
    result: UPLOADSTATUS
): UploadResponse => {
    return {
        id: extFile.id,
        uploadedFile: {
            ...extFile,
            uploadMessage: serverResponse.message,
            uploadStatus: result
        },
        serverResponse: serverResponse
    }
}
export const uploadOnePromiseXHR = async (
    extFile: ExtFile,
    url: string,
    method?: Method,
    headers?: Record<string, string>,
    uploadLabel?: string,
    extraData?: Record<string, any>
): Promise<UploadResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const uploader: XMLHttpRequest | undefined = extFile.xhr;
            if (!uploader) {
                const duiUploadResponse: UploadResponse = unableToUploadResult(extFile);
                resolve(duiUploadResponse);
                return;
            }
            const localMethod: Method = (method) || "POST";
            const fileToUpload: File = extFile.file as File;

            const formData = new FormData();
            if (typeof uploadLabel === "string" && uploadLabel.length > 0) {
                formData.append(uploadLabel, fileToUpload
                    //, extFile.file?.name
                );
                //add extraData that will be obtained from req.body

            } else
                formData.append("file", fileToUpload);

            const finalExtraData: Record<string, any> = { otherValue: "other valueee haaaa", param2: { tecnica: "KIKOHUUUU", friend: "Chaos", age: 25 } };

            if (finalExtraData) {
                const extraDataKeys: string[] = Object.keys(finalExtraData);
                extraDataKeys.forEach(key => {
                    const finalValue: string = typeof finalExtraData[key] === "string" ? finalExtraData[key] : JSON.stringify(finalExtraData[key]);
                    formData.append(key, finalValue);

                });
            }
            let serverResponse: ServerResponse;

            //console.log();
            serverResponse = await FuiUpload(uploader, localMethod, url, formData, headers || {});

            if (serverResponse.success) {
                const duiUploadResponse: UploadResponse = completeUploadResult(extFile, serverResponse, "success");
                resolve(duiUploadResponse);
            } else {
                // success is false
                const duiUploadResponse: UploadResponse = completeUploadResult(extFile, serverResponse, "error");
                resolve(duiUploadResponse);
            }
        } catch (error) {
            // on error
            console.log("uploadOnePromiseXHR ERROR", error);
            const duiUploadResponse: UploadResponse = unableToUploadResult(extFile);
            resolve(duiUploadResponse);
        }
    });
};
/**
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

        xhr.upload.ontimeout = () => {
            //onError("Timeout error");
            resolve(
                {
                    success: false,
                    message: "Timeout error",
                    payload: {}
                }
            );
        };

        xhr.upload.onabort = () => {
            resolve(
                {
                    success: false,
                    message: "Upload aborted",
                    payload: {}
                }
            );
        };
        // listen for `progress` event
        //currently listening on FileItem component hook
        xhr.onreadystatechange = async (e) => {
            //console.log("Finished", xhr);
            console.log("FuiUpload onreadystatechange", xhr.readyState, xhr.response, xhr);
            let duiRes = {
                success: false,
                message: "Unexpected error",
                payload: {}
            }
            if (xhr.readyState === 4) {
                if (xhr.response !== "") {
                    //there is th answer
                    let duiRes: ServerResponse;
                    try {
                        const jsonResponse = JSON.parse(xhr.response);
                        const success: any = jsonResponse.success;
                        const message: string = jsonResponse.message;
                        const payload: any = jsonResponse.payload;

                        duiRes = {
                            success: typeof success === "boolean" ? success : false,
                            message: typeof message === "string" ? message : "Error on message response",
                            payload: payload || {}
                        }
                        resolve(duiRes);
                    } catch (error) {
                        duiRes = {
                            success: false,
                            message: "Error when parsing JSON response",
                            payload: {}
                        }
                        console.log("FuiUpload ERROR", error);
                        resolve(duiRes);
                    }
                } else {
                    //error unexpected
                    duiRes = {
                        success: false,
                        message: "Unexpected error",
                        payload: {}
                    }
                    resolve(duiRes);
                }
            } else {
                console.log("FuiUpload NOT YET" + xhr.readyState);
            }

        /*     if (xhr.readyState === 4 && xhr.response !== "") {
                let duiRes: ServerResponse;
                try {
                    const jsonResponse = JSON.parse(xhr.response);
                    const success: any = jsonResponse.success;
                    const message: string = jsonResponse.message;
                    const payload: any = jsonResponse.payload;
                    console.log("FuiUpload ====> success", success);
                    console.log("FuiUpload ====> message", message);
                    console.log("FuiUpload====> payload", payload);

                    duiRes = {
                        success: typeof success === "boolean" ? success : false,
                        message: typeof message === "string" ? message : "Error on response",
                        payload: payload || {}
                    }
                    resolve(duiRes);
                } catch (error) {
                    duiRes = {
                        success: false,
                        message: "Unexpected error",
                        payload: {}
                    }
                    console.log("FuiUpload ERROR", error);
                    resolve(duiRes);
                }
            } else {
                console.log("FuiUpload Naranjas Changed to " + xhr.readyState);
                const duiRes = {
                    success: false,
                    message: "Unexpected error",
                    payload: {}
                }
                resolve(duiRes);
            } */
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
/**
 * Initializes the xhr attribute for performing uploads
 * @param extFileList the list of extended files
 * @returns the array of extFiles with the xhr attribute initialized
 */
export const toUploadableExtFileList = (
    extFileList: ExtFile[] | ExtFileInstance[]
): ExtFile[] => {
    if (!extFileList) return [];
    return extFileList.map(extFile => {
        return { ...extFile, xhr: new XMLHttpRequest() }
    });
}

/**
 * Updates the uploadStatus of the given extFile 
 * from "preparing" to "uploading"
 * @param extFile the extended file
 * @returns the extended file with uploadStatus updated to "uploading"
 */
export const instantPreparingToUploadOne = (
    extFile: ExtFileInstance | ExtFile
): ExtFileInstance | ExtFile => {
    if (extFile.uploadStatus === "preparing") {
        //for ExtFile instance
        extFile.uploadStatus = "uploading";
        //for ExtFile type
        return {
            ...extFile,
            uploadStatus: "uploading",
        };
    }
    return extFile;
};

/**
 * 
 * @param extFile the extended file
 * @returns 
 */
export const preparingToUploadOne = (
    extFile: ExtFileInstance | ExtFile
): Promise<ExtFileInstance | ExtFile> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (extFile.uploadStatus === "preparing") {
                //for ExtFile instance
                extFile.uploadStatus = "uploading";
                //for ExtFile type
                resolve({
                    ...extFile,
                    uploadStatus: "uploading",
                });
            } else
                resolve(extFile);
        }, 1500);
    });
};
/**
 * Sleeps for 1200 miliseconds for showing a better transition
 * on uploading
 * @returns true is everything is ok
 */
export const sleepTransition = (
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1200);
    });
}


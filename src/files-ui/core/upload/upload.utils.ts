import { ExtFile, ExtFileInstance, Method, ServerResponse, UploadResponse, UPLOADSTATUS } from "../types"

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
    uploadLabel?: string
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
            if (typeof uploadLabel === "string" && uploadLabel.length > 0)
                formData.append(uploadLabel, fileToUpload);
            else
                formData.append("file", fileToUpload);

            let serverResponse: ServerResponse;
            //stablish events    
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
            console.log("ERROR", error);
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
        console.log("DuiUpload", xhr, method, endpoint, data, headers);
        xhr.upload.onload = () => {
            console.log("DuiUpload onLoad", xhr.readyState, xhr.response);

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
            console.log("DuiUpload onreadystatechange", xhr.readyState, xhr.response);
            if (xhr.readyState === 4 && xhr.response !== "") {
                let duiRes: ServerResponse;
                try {
                    const jsonResponse = JSON.parse(xhr.response);
                    const success: any = jsonResponse.success;
                    const message: string = jsonResponse.message;
                    const payload: any = jsonResponse.payload;
                    console.log("====> success", success);
                    console.log("====> message", message);
                    console.log("====> payload", payload);

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
                    console.log("DuiUpload ERROR", error);
                    resolve(duiRes);
                }
            } else {
                console.log("Naranjas Changed to " + xhr.readyState);
            }
        };
        // open request
        xhr.open(method, endpoint, true);
        const headerKeys: string[] = Object.keys(headers);
        //const headerValues: string[] = Object.values(headers);
        for (let i = 0; i < headerKeys.length; i++) {
            console.log("DuiUpload headers", headerKeys[i], headers[headerKeys[i]]);
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
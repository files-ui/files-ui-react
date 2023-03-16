
import { DropzoneLocalizerSelector } from "../localization";
import { ExtFile, ExtFileInstance, UploadResponse } from "../types";

/**
 * Updates a extFile and sets its uploadStatus to "uploading"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
export const setPrepToUploading = (
    extFile: ExtFile
): Promise<ExtFile> => {
    console.log("prepToUpload One", extFile);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ...extFile,
                uploadStatus: "uploading",
            });
        }, 1500);

    });
};
/**
 * Updates a extFile and sets its uploadStatus to "success"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
export const uploadOne = (
    extFile: ExtFile
): Promise<ExtFile> => {
    console.log("upload One", extFile);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ...extFile,
                uploadStatus: "success",
            });
        }, 2000);
    });
};
/**
 * Awaits the given time before start uploading
 * @param preparingTime the time in miliseconds, by default it will wait 1.5 secs
 * @returns an empty object
 */
export const sleepPreparing = (
    preparingTime: number = 5000
): Promise<void> => {
    console.log("uploadfiles preparingTime One", preparingTime);
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve();
        }, preparingTime);

    });
}

/**
 * 
 * @param extFileInstance 
 * @returns 
 */
export const prepToUploadOne = (
    extFileInstance: ExtFileInstance | ExtFile
): Promise<ExtFileInstance | ExtFile> => {
    //console.log("prepToUpload One", extFileInstance);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            extFileInstance.uploadStatus = "uploading";
            resolve({
                ...extFileInstance,
                uploadStatus: "uploading",
            });
        }, 1500);

    });
};

/**
 * 
 * @param extFileInstance 
 * @returns 
 */
export const uploadOneExtFile = (
    extFileInstance: ExtFileInstance
): Promise<Object> => {
    //console.log("upload One", extFileInstance);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            extFileInstance.uploadStatus = "success";
            resolve({
                ...extFileInstance,
                uploadStatus: "success",
            });
        }, 2000);
    });
};


/**
 * 
 * @param extFile the extFile to upload 
 * @param DropzoneLocalizer the localization
 * @returns a duiUploadResponse object that describes the result
 */
export const fakeFuiUpload = (
    extFileInstance: ExtFileInstance,
    DropzoneLocalizer = DropzoneLocalizerSelector("EN-en")
): Promise<ExtFile> => {
    
    const extFile:ExtFile = extFileInstance.toExtFile();
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber: number = Math.floor(Math.random() * 10);
            if (randomNumber % 2 === 0) {
                const success = true;
                const message = DropzoneLocalizer.fakeuploadsuccess as string;
                const payload = { url: "" };
                resolve({
                    ...extFile,
                    serverResponse: { success, message, payload },
                    uploadStatus: "success",
                    uploadMessage: message,

                });
            } else {
                const success = false;
                const message = DropzoneLocalizer.fakeUploadError as string;
                const payload = {};
                resolve({
                    ...extFile,
                    serverResponse: { success, message, payload },
                    uploadStatus: "error",
                    uploadMessage: message,
                });
            }
        }, 1700);
    });
};


/**
 * 
 * @param extFile the extFile to upload 
 * @param DropzoneLocalizer the localization
 * @returns a duiUploadResponse object that describes the result
 */
export const fakeFuiUploadExtFile = (
    extFileInstance: ExtFileInstance,
    DropzoneLocalizer = DropzoneLocalizerSelector("EN-en")
): Promise<UploadResponse> => {
    
    const extFile:ExtFile = extFileInstance.toExtFile();
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber: number = Math.floor(Math.random() * 10);
            if (randomNumber % 2 === 0) {
                const status = true;
                const message = DropzoneLocalizer.fakeuploadsuccess as string;
                const payload = { url: "" };

                resolve({
                    id: extFile.id,
                    serverResponse: { status, message, payload },
                    uploadedFile: {
                        ...extFile,
                        uploadStatus: "success",
                        uploadMessage: message,
                        progress: 100
                    }

                });
            } else {
                const status = false;
                const message = DropzoneLocalizer.fakeUploadError as string;
                const payload = {};
                resolve({
                    id: extFile.id,
                    serverResponse: { status, message, payload },
                    uploadedFile: {
                        ...extFile,
                        uploadStatus: "error",
                        uploadMessage: message,
                        progress: 60
                    },
                });
            }
        }, 1700);
    });
};

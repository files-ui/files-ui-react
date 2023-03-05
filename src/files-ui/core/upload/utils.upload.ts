
import { ExtFile, ExtFileInstance, ServerResponse, UploadResponse, UPLOADSTATUS } from "../types"

export const unexpectedErrorUploadResult = (extFile: ExtFile): UploadResponse => {
    return {
        id: extFile.id,
        uploadedFile:
        {
            ...extFile,
            uploadMessage: "Unexpected error",
            uploadStatus: "error"
        },
        serverResponse: {
            success: false,
            message: "Error on upload: unexpected error ",
            payload: {},
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
            success: false,
            message: "Error on upload: Unable to upload. XHR was not provided ",
            payload: {},
        }
    }
}
export const completeUploadResult = (
    extFile: ExtFile,
    serverResponse: ServerResponse,
    uploadStatusresult: UPLOADSTATUS
): UploadResponse => {
    return {
        id: extFile.id,
        uploadedFile: {
            ...extFile,
            uploadMessage: serverResponse.message,
            uploadStatus: uploadStatusresult
        },
        serverResponse: serverResponse
    }
}

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
 * @param time the time to sleep in miliseconds
 * @returns true is everything is ok
 */
export const sleepTransition = (time = 1500
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
}

export const sanitizeArrExtFile = (arrExtFile: ExtFileInstance[]): ExtFile[] => {
    return arrExtFile.filter((extFileInstance: ExtFileInstance) =>
        !extFileInstance.extraData?.deleted)
        .map((extFileInstance: ExtFileInstance) => {
            if (extFileInstance.uploadStatus === "aborted"
                && !extFileInstance.uploadMessage) {
                extFileInstance.uploadMessage = "Upload aborted by user";
                //extFileInstance.uploadStatus = "error";
            }

            return extFileInstance.toExtFile()
        });
}
/**
 * 
 * @param extFileInstance 
 * @param extFileobj 
 */
export const setNextUploadStatus = (
    extFileInstance: ExtFileInstance,
    extFileobj: ExtFile) => {

    const prevStatus: UPLOADSTATUS | undefined = extFileInstance.uploadStatus;
    const nextStstaus: UPLOADSTATUS | undefined = extFileobj.uploadStatus;

    if (
        prevStatus === "preparing" &&
        ["aborted", undefined].includes(nextStstaus)
    ) {
        extFileInstance.uploadStatus = undefined;
    } else if (
        prevStatus === "uploading" &&
        ["aborted", undefined].includes(nextStstaus)
    ) {
        extFileInstance.uploadStatus = "aborted";

    }
    extFileInstance.uploadMessage = extFileobj.uploadMessage;

}


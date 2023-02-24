import { ExtFile, UploadResponse } from "../types";

export const TIMEOUT_ERROR_RESPONSE = {
    success: false,
    message: "Timeout error",
    payload: {}
};
export const ABORTED_ERROR_RESPONSE = {
    success: false,
    message: "Upload aborted",
    payload: {}
}
export const JSON_PARSE_ERROR_RESPONSE = {
    success: false,
    message: "Error when parsing JSON response",
    payload: {}
}

export const UNEXPECTED_ERROR_RESPONSE = {
    success: false,
    message: "Unexpected error",
    payload: {}
}

export const NO_XHR_PROVIDED_ERROR = (extFile: ExtFile): UploadResponse => {
    return {
        uploadedFile:
        {
            ...extFile,
            uploadMessage: "Unable to upload. xhr object was not provided",
            uploadStatus: "error"
        },

        id: extFile.id,
        serverResponse: {}
    }
}
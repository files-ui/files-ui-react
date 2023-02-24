import { ExtFile, ServerResponse, UploadResponse } from "../types";
import { JSON_PARSE_ERROR_RESPONSE } from "./errors.upload";

export const makeServerResponse = (success: any, message: string, payload: any): ServerResponse => {
    const result: ServerResponse = { success: success, message: message, payload: payload } as ServerResponse;
    return result;
}
export const JsonParseResponse = (xhr: XMLHttpRequest): ServerResponse => {
    try {
        const jsonResponse = JSON.parse(xhr.response);
        const success: any = jsonResponse.success;
        const message: string = jsonResponse.message;
        const payload: any = jsonResponse.payload;

        const fuiResponse: ServerResponse = {
            success: typeof success === "boolean" ? success : false,
            message: typeof message === "string" ? message : "Error on message response",
            payload: payload || {}
        }
        return fuiResponse
    } catch (error) {
        console.log("FuiUpload ERROR", error);
        return JSON_PARSE_ERROR_RESPONSE;
    }
}



export const makeSuccessUploadResponse = (
    extFile: ExtFile,
    responseFui: ServerResponse
): UploadResponse => {
    return {
        id: extFile.id,
        serverResponse: responseFui,
        uploadedFile:
        {
            ...extFile,
            uploadMessage: responseFui.message,
            uploadStatus: "success"
        },
    }
}


export const makeErrorUploadResponse = (
    extFile: ExtFile,
    responseFui: ServerResponse
): UploadResponse => {
    return {
        id: extFile.id,
        serverResponse: responseFui,
        uploadedFile:
        {
            ...extFile,
            uploadMessage: responseFui.message,
            uploadStatus: "error"
        },
    }
}


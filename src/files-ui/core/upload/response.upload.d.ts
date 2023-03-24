import { ExtFile, ServerResponse } from "../types";
export declare const makeServerResponse: (success: any, message: string, payload: any) => ServerResponse;
export declare const JsonParseResponse: (xhr: XMLHttpRequest) => ServerResponse;
export declare const makeSuccessUploadResponse: (extFile: ExtFile, responseFui: ServerResponse) => ExtFile;
export declare const makeErrorUploadResponse: (extFile: ExtFile, responseFui: ServerResponse) => ExtFile;

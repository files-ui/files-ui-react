import { ExtFile } from "../types";
export declare const TIMEOUT_ERROR_RESPONSE: {
    success: boolean;
    message: string;
    payload: {};
};
export declare const ABORTED_ERROR_RESPONSE: {
    success: boolean;
    message: string;
    payload: {};
};
export declare const JSON_PARSE_ERROR_RESPONSE: {
    success: boolean;
    message: string;
    payload: {};
};
export declare const UNEXPECTED_ERROR_RESPONSE: {
    success: boolean;
    message: string;
    payload: {};
};
export declare const NO_XHR_PROVIDED_ERROR: (extFile: ExtFile) => ExtFile;

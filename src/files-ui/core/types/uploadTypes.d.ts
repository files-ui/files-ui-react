import { ExtFile } from "./ExtFile";
export declare type UploadResponse_ = {
    id: number | string | undefined;
    uploadedFile: ExtFile;
};
export declare type UploadPromiseResponse = {
    uploadResponse: UploadResponse;
    uploadedFile: ExtFile;
};
export declare type UploadResponse = {
    id: number | string | undefined;
    serverResponse: ServerResponse | {};
    uploadedFile: ExtFile;
};
export type ServerResponse = {
    /**
     * If true, it means that the request was successful.
     */
    success: boolean;
    /**
     * A message that describes the result of the request.
     */
    message?: string;
    /**
     * The response of the server.
     */
    payload?: any;
};

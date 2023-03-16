import { ExtFile } from "./ExtFile";

export declare type UploadResponse_ = {
    id: number | string | undefined;
    uploadedFile: ExtFile;
}

export declare type UploadPromiseResponse = {
    uploadResponse: UploadResponse;
    uploadedFile: ExtFile;
}

/////////
export declare type UploadResponse = {
    id: number | string | undefined;
    serverResponse: ServerResponse | {};
    uploadedFile: ExtFile;
}
export type ServerResponse = {
    success: boolean;
    message?: string;
    payload?: any;
}


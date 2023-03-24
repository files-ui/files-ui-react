import { ExtFile, Method } from "../types";
import { ServerResponse } from "../types/uploadTypes";
/**
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data upload
 * @param headers the set of headers
 * @returns a server response that consists on {status, payload, message}
 */
export declare const uploadFormData: (xhr: XMLHttpRequest, method: Method | undefined, endpoint: string, data: FormData, headers: Record<string, string> | undefined) => Promise<ServerResponse>;
/**
 *
 * @param file the extended file to be uploaded
 * @param url the endpoint
 * @param method the method for uploading
 * @param headers headers for request
 * @returns
 */
export declare const uploadExtFile: (extFile: ExtFile, url: string, method?: Method, headers?: Record<string, string>, uploadLabel?: string) => Promise<ExtFile>;
export declare function uploadFile(file: File, url: string, method?: Method, label?: string, headers?: Record<string, string>): Promise<ServerResponse>;
/**
 * @deprecated
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data
 * @param headers the set of headers
 * @returns a dui server response that consists on {success, payload, message}
 */
export declare const FuiUpload: (xhr: XMLHttpRequest, method: Method, endpoint: string, data: FormData, headers: Record<string, string>) => Promise<ServerResponse>;

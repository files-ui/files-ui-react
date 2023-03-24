import { ExtFile, ExtFileInstance, UploadResponse } from "../types";
/**
 * Updates a extFile and sets its uploadStatus to "uploading"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
export declare const setPrepToUploading: (extFile: ExtFile) => Promise<ExtFile>;
/**
 * Updates a extFile and sets its uploadStatus to "success"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
export declare const uploadOne: (extFile: ExtFile) => Promise<ExtFile>;
/**
 * Awaits the given time before start uploading
 * @param preparingTime the time in miliseconds, by default it will wait 1.5 secs
 * @returns an empty object
 */
export declare const sleepPreparing: (preparingTime?: number) => Promise<void>;
/**
 *
 * @param extFileInstance
 * @returns
 */
export declare const prepToUploadOne: (extFileInstance: ExtFileInstance | ExtFile) => Promise<ExtFileInstance | ExtFile>;
/**
 *
 * @param extFileInstance
 * @returns
 */
export declare const uploadOneExtFile: (extFileInstance: ExtFileInstance) => Promise<Object>;
/**
 *
 * @param extFile the extFile to upload
 * @param DropzoneLocalizer the localization
 * @returns a duiUploadResponse object that describes the result
 */
export declare const fakeFuiUpload: (extFileInstance: ExtFileInstance, DropzoneLocalizer?: import("../types").LocalLabels) => Promise<ExtFile>;
/**
 *
 * @param extFile the extFile to upload
 * @param DropzoneLocalizer the localization
 * @returns a duiUploadResponse object that describes the result
 */
export declare const fakeFuiUploadExtFile: (extFileInstance: ExtFileInstance, DropzoneLocalizer?: import("../types").LocalLabels) => Promise<UploadResponse>;

import { ExtFile, ExtFileInstance, ServerResponse, UploadResponse, UPLOADSTATUS } from "../types";
export declare const unexpectedErrorUploadResult: (extFile: ExtFile) => ExtFile;
export declare const unableToUploadResult: (extFile: ExtFile) => UploadResponse;
export declare const completeUploadResult: (extFile: ExtFile, serverResponse: ServerResponse, uploadStatusresult: UPLOADSTATUS) => UploadResponse;
/**
 * Initializes the xhr attribute for performing uploads
 * @param extFileList the list of extended files
 * @returns the array of extFiles with the xhr attribute initialized
 */
export declare const toUploadableExtFileList: (extFileList: ExtFile[] | ExtFileInstance[]) => ExtFile[];
/**
 * Updates the uploadStatus of the given extFile
 * from "preparing" to "uploading"
 * @param extFile the extended file
 * @returns the extended file with uploadStatus updated to "uploading"
 */
export declare const instantPreparingToUploadOne: (extFile: ExtFileInstance | ExtFile) => ExtFileInstance | ExtFile;
/**
 *
 * @param extFile the extended file
 * @returns
 */
export declare const preparingToUploadOne: (extFile: ExtFileInstance | ExtFile) => Promise<ExtFileInstance | ExtFile>;
/**
 * Sleeps for 1200 miliseconds for showing a better transition
 * on uploading
 * @param time the time to sleep in miliseconds
 * @returns true is everything is ok
 */
export declare const sleepTransition: (time?: number) => Promise<boolean>;
/**
 * Removes the deleted files and updates the aborted ones with a message
 * @param arrExtFile incomming arr of extFle instances
 * @returns an array of ExtFle objects
 */
export declare const sanitizeArrExtFile: (arrExtFile: ExtFileInstance[]) => ExtFile[];
/**
 *
 * @param extFileInstance
 * @param extFileobj
 */
export declare const setNextUploadStatus: (extFileInstance: ExtFileInstance, extFileobj: ExtFile) => void;

import { ExtFile, ExtFileInstance } from "../types";
/**
 * Converts the fileList into an array of separated ExtFile objects
 * @param fileList the FileList object given by input(event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile objects
 */
export declare const fileListToExtFileArray: (fileList: FileList) => ExtFile[];
/**
 * Converts the fileList into an array of separated ExtFile instances
 * @param fileList the FileList object given by input (event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile instances
 */
export declare const fileListToExtFileInstanceArray: (fileList: FileList) => ExtFileInstance[];

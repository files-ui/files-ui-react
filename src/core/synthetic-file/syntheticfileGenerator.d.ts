import { ExtFile, UPLOADSTATUS } from "../types";
/**
 * Make a validated file that is ready to be used on FileItem component,
 * if valid is not set, a random operation will decide whether the file is valid or not
 * If valid is false, then the natural order is not to be uploadable and wont have upload message nor upload status
 * If valid is true, then file can be uploaded and can have upload message if the status is succes or error
 * @param file The file
 * @param valid true if it is a valid file, otherwise is false
 * @param uploadStatus the current upload status. If not given a random upload status will be set
 * @param uploadMessage the upload message after uploading
 * @returns a Vaidated File object
 */
export declare const makeSyntheticExtFile: (file?: File, valid?: boolean, uploadStatus?: UPLOADSTATUS, uploadMessage?: string) => ExtFile;

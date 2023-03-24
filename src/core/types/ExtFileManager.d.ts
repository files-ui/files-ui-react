import { ExtFileInstance, ExtFile } from "./ExtFile";
export declare class ExtFileManager {
    private static nextId;
    static fileLists: Record<number | string, ExtFileInstance[] | undefined>;
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    static getNextId(): number;
    /**
     * Updates a dui file list given an id
     * @param id id of the fileList
     * @param extFiles list of DuiFiles forinitializing the array
     * @returns the id of the fileList
     */
    static setFileList(id: number | string | undefined, extFilesInstances: ExtFileInstance[]): number | string;
    /**
     * Generates a new ID
     * @returns the next Id asociated with a DuiFIle list
     */
    static createFileListMap(): number;
    /**
     * Deletes a list map
     * @returns the next Id asociated with a DuiFIle list
     */
    static removeFileListMap(id?: number | string): number | string;
    /**
     *
     * @param id the id of the dropzone
     * @returns
     */
    static getExtFileInstanceList(id?: number | string): ExtFileInstance[] | undefined;
    /**
     * Updates(replaces) the extFile list on preparing stage and returns the new array.
     * Removes the non valid files if cleanOnUpload is true and validateFiles is also true
     * Then sets on preparing stage all files according to the following creiteria:
     * If theuploadStatus is diferent than "sucess" AND
     * then, update the files on preparing stage. Otherwise keep the extFile props.
     * Finally, updates the ExtFileInstance list on ExtFileManager.
     * @param dropzoneId the id to access the right list
     * @param localFiles the list of extFiles
     * @param validateFiles flag that indicates that validation is active or o¿not
     * @param cleanOnUpload flag to determine whther to clena the list oof non valid files or not
     * @returns a list of ExtFileInstance
     */
    static setFileListMapPreparing(dropzoneId: number | string, localFiles: ExtFile[], validateFiles: boolean, cleanOnUpload: boolean): ExtFileInstance[] | undefined;
    /**
 * Updates(replaces) the extFile list on preparing stage and returns the new array.
 * Removes the non valid files if cleanOnUpload is true and validateFiles is also true
 * Then sets on preparing stage all files according to the following creiteria:
 * If theuploadStatus is diferent than "sucess" AND
 * then, update the files on preparing stage. Otherwise keep the extFile props.
 * Finally, updates the ExtFileInstance list on ExtFileManager.
 * @param dropzoneId the id to access the right list
 * @param localFiles the list of extFiles
 * @param validateFiles flag that indicates that validation is active or o¿not
 * @param cleanOnUpload flag to determine whther to clena the list oof non valid files or not
 * @returns a list of ExtFileInstance
 */
    static setFileListMapPreparing2(dropzoneId: number | string, localFiles: ExtFile[], validateFiles: boolean, cleanOnUpload: boolean): ExtFileInstance[] | undefined;
}

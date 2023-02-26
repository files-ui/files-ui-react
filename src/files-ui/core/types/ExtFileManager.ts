import { ExtFileInstance, ExtFile } from "./ExtFile";

export class ExtFileManager {
    private static nextId: number = 0;
    static fileLists: Record<number | string, ExtFileInstance[] | undefined> = {};
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    public static getNextId(): number {
        ExtFileManager.nextId++;
        return ExtFileManager.nextId;
    }
    /**
     * Updates a dui file list given an id
     * @param id id of the fileList
     * @param extFiles list of DuiFiles forinitializing the array
     * @returns the id of the fileList
     */
    public static setFileList(
        id: number | string | undefined,
        extFilesInstances: ExtFileInstance[]
    ): number | string {
        if (!id) {
            return 0;
        } else {
            ExtFileManager.fileLists[id] = [...extFilesInstances];

            return id;
        }

    }
    /**
     * Generates a new ID
     * @returns the next Id asociated with a DuiFIle list
     */
    public static createFileListMap(): number {
        const nextId: number = ExtFileManager.getNextId();
        ExtFileManager.fileLists[nextId] = [];

        return nextId;
    }

    /**
     * Deletes a list map
     * @returns the next Id asociated with a DuiFIle list
     */
    public static removeFileListMap(id?: number | string): number | string {
        if (!id) {
            return 0;
        } else {
            try {
                ExtFileManager.fileLists[id] = undefined;
                return id;
            } catch (error) {

                console.error("Error on remove", error);
                return 0;
            }
        }
    }
    /**
     * 
     * @param id the id of the dropzone
     * @returns 
     */
    public static getExtFileInstanceList(
        id?: number | string
    ): ExtFileInstance[] | undefined {
        try {
            if (!id) {
                return undefined;
            }
            return ExtFileManager.fileLists[id];
        } catch (error) {
            console.error("Error on getExtFileInstanceList", error);
            return undefined;
        }
    }
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
    public static setFileListMapPreparing(
        dropzoneId: number | string,
        localFiles: ExtFile[],
        validateFiles: boolean,
        cleanOnUpload: boolean
    ): ExtFileInstance[] | undefined {

        if (!(typeof dropzoneId === "number" || typeof dropzoneId === "string")) return undefined;

        try {
            let resultExtList: ExtFileInstance[] = [];
            //remove non valids if cleanOnUpload is true and validateFiles is also true
            let temLocalFiles: ExtFile[] = [];

            if (cleanOnUpload) {
                // clean on Upload is true, so non valid files must be removed
                temLocalFiles = localFiles.filter(extFile => extFile.valid)
                console.log("temLocalFiles filter", temLocalFiles);
            }

            if (validateFiles) {
                // validation flag was set to true, so only valid=true files will be set to "preparing"

                //so, only valid files was kept in the temLocalfiles array
                //now set the preparing state only for files with uploadStatus !== "success"
                temLocalFiles =
                    temLocalFiles
                        .map(extFile => {
                            if (extFile.uploadStatus !== "success" && extFile.valid) {
                                return { ...extFile, uploadStatus: "preparing" }
                            } else {
                                return { ...extFile }
                            }
                        });
            } else {
                // all files will be set to "preparing" whether the valid value
                // except those diles with uploadStatus ==="success"
                temLocalFiles =
                    temLocalFiles
                        .map(extFile => {
                            if (extFile.uploadStatus !== "success") {
                                return { ...extFile, uploadStatus: "preparing" }
                            } else {
                                return { ...extFile }
                            }
                        });
            }

            console.log("FileManagerLog RESULT temLocalFiles", temLocalFiles);

            //sets on preparing stage all files according to the following criteria:
            // If the uploadStatus is diferent than "sucess" AND
            // If validateFiles is true and the file is true OR validateFiles is false
            // then update the files on preparing stage. Otherwise keep the extFile props.
            /*  for (let i = 0; i < resultExtList.length; i++) {
                 const extFileInstance: ExtFileInstance = resultExtList[i];
                 const { valid, uploadStatus } = extFileInstance;
                 console.log("upload setFileListMapPreparing resultExtList[i]", (uploadStatus !== "success") && ((validateFiles && valid) || !validateFiles));
 
                 if ((uploadStatus !== "success") && ((validateFiles && valid) || !validateFiles))
                     resultExtList[i].uploadStatus = "preparing";
             } */

            resultExtList = temLocalFiles.map(F => new ExtFileInstance(F));
            console.log("FileManagerLog RESULT resultExtList", resultExtList);

            const resultSet = ExtFileManager.setFileList(dropzoneId, resultExtList);
            console.log("FileManagerLog RESULT resultSet", resultSet);

            return resultExtList;
            // return ExtFileManager.fileLists[dropzoneId];
        } catch (error) {
            console.error("upload setFileListMapPreparing Error on get List", error);
            return undefined;
        }

    }



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
    public static setFileListMapPreparing2(
        dropzoneId: number | string,
        localFiles: ExtFile[],
        validateFiles: boolean,
        cleanOnUpload: boolean
    ): ExtFileInstance[] | undefined {

        ExtFileManager.setFileList(dropzoneId, localFiles.map(F => new ExtFileInstance({ ...F, uploadStatus: "preparing" })));

        return ExtFileManager.getExtFileInstanceList(dropzoneId);
    }



    /**
     * 
     * @param dropzoneId 
     * @param index 
     * @param incommingDuiFile 
     * @returns 
     */
    /* public static updateFileListMapPreparingById(
        dropzoneId: number,
        index: number,
        incommingDuiFile: ExtFileInstance
    ): ExtFileInstance[] | undefined {
        if (!(typeof dropzoneId === "number") || !(typeof index === "number") || index > 0) return undefined;
        const extFileList: ExtFileInstance[] | undefined = ExtFileManager.fileLists[dropzoneId];

        if (!(extFileList && extFileList.length > 0)) return undefined;
        extFileList[index]=
        try {
            ExtFileManager.setFileList(dropzoneId, [
                ...localFiles.map(
                    (x) =>
                        new ExtFileInstance({ ...x, uploadStatus: "preparing" })
                ),
            ]);
            return ExtFileManager.fileLists[dropzoneId];
        } catch (error) {
            console.error("Error on get List", error);
            return undefined;
        }

    } */
}
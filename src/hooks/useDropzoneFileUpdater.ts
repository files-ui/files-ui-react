import * as React from "react";
import { ValidateFileResponse, ExtFile, ExtFileInstance, ExtFileManager, FileValidatorProps, Localization, setNextUploadStatus, validateExtFileList } from "theamazingunkowntext"

/**
 * Effect for keeping track of changes
 * update files when value changes
 * also updates the number of valid files
 * When `isUploading` is true, it only updates when value and arrOfExtFiles
 * have same lenght. Also, only updates the uploadStatus attribute
 * from "preparing", to undefined when onCancel() method is called in 
 * FileItem component
 * @param dropzoneId the asociated dropzoneId for the corresponding array of ExtFiles in case of multiple dropzones
 * @param value the current value of the list of Files from props
 * @param isUploading 
 * @returns the local list of Files
 */
export const useDropzoneFileListUpdater = (
    dropzoneId: number | string | undefined,
    value: ExtFile[],
    isUploading: boolean,
    maxFileSize?: number,
    accept?: string,
    maxFiles?: number,
    validator?: ((f: File) => ValidateFileResponse),
    localization?: Localization,
    validateFilesFlag?: boolean
): [ExtFile[], number, React.Dispatch<React.SetStateAction<ExtFile[]>>] => {
    //console.log("incomming extfiles fileupdater value", value.map(x => x.uploadStatus));
    
    //console.log("FileListUpdater", dropzoneId, value, isUploading, maxFileSize, accept, maxFiles, validateFilesFlag);

    //state for managing the files locally
    const [localFiles, setLocalFiles] = React.useState<ExtFile[]>([]);
    // the current number of valid files
    const [numberOfValidFiles, setNumberOfValidFiles] = React.useState<number>(0);

    //Detect changes in the file item props when upload started
    //mostly for detecting 
    React.useEffect(() => {
        let arrOfExtFiles: ExtFileInstance[] | undefined =
            ExtFileManager.getExtFileInstanceList(dropzoneId);
        //console.log("value changed", isUploading, value.map(F => F.uploadStatus), dropzoneId);
        // //console.log("value changed", value.map(F => F.uploadStatus));
        if (!isUploading) {
            setLocalFiles(value);
        } else {
            // when is uploading
            if (arrOfExtFiles) {
                //lenght of the new arr can be equal or lower
                //when lower, it means a file was deleted, it will be removed only if was not uploaded
                //when same lenght it means that a file could be

                //no mather the size, it will search for the missing and the status that changed
                arrOfExtFiles.forEach((extFileInstance: ExtFileInstance) => {
                    //if the current Ext file is not present anymore
                    //add deleted flag
                    const extFileIndex: number = value.findIndex((extFile: ExtFile) => extFile.id === extFileInstance.id)

                    if (extFileIndex === -1) {
                        extFileInstance.extraData = { deleted: true }
                        //console.log("extFileUpdater not found", extFileInstance.id);
                    } else {
                        const currExtFileObj: ExtFile = value[extFileIndex];

                        setNextUploadStatus(extFileInstance, currExtFileObj);
                    }
                })

                /*if (arrOfExtFiles.length !== value.length || value.length === 0) {
                    return;
                }
                for (let i = 0; i < arrOfExtFiles.length; i++) {
                    if (
                        (value[i].uploadStatus === undefined)
                        &&
                        (arrOfExtFiles[i].uploadStatus === "preparing")
                    ) {
                        //console.log("useDropzoneFileListUpdater onCancel i", i);
                        arrOfExtFiles[i].uploadStatus = undefined;
                    }
                } */
            }
        }
        // eslint-disable-next-line
    }, [dropzoneId, value,
        // isUploading
    ]);


    //Detect changes in validation props for re-validating files
    React.useEffect(() => {
        if (!validateFilesFlag) {
            setLocalFiles(localFiles.map(F => { return { ...F, valid: undefined } }));
            return;
        }
        const localValidator: FileValidatorProps = { maxFileSize, accept };
        const validatedExtFileList: ExtFile[] = validateExtFileList(
            localFiles,
            maxFiles ? maxFiles - numberOfValidFiles : Infinity,
            localValidator,
            validator,
            maxFiles,
            localization
        );

        setLocalFiles(validatedExtFileList);
        //missing dependencie localFiles was not added by purpose
        // eslint-disable-next-line
    }, [validateFilesFlag, maxFileSize, accept, maxFiles, localization]);


    // the current number of valid files
    // update number of valid files
    React.useEffect(() => {
        if (validateFilesFlag) {
            setNumberOfValidFiles(localFiles.filter((x) => x.valid).length);
        } else {
            setNumberOfValidFiles(localFiles.length);
        }
    }, [localFiles, validateFilesFlag]);


    return [localFiles, numberOfValidFiles, setLocalFiles];
}

import * as React from "react";
import { CustomValidateFileResponse, ExtFile, ExtFileInstance, ExtFileManager, FileValidatorProps, Localization, validateExtFileList } from "../core";

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
const useDropzoneFileListUpdater = (
    dropzoneId: number | string | undefined,
    value: ExtFile[],
    isUploading: boolean,
    maxFileSize?: number,
    accept?: string,
    maxFiles?: number,
    validator?: ((f: File) => CustomValidateFileResponse),
    localization?: Localization,
    validateFilesFlag?: boolean
): [ExtFile[], number, React.Dispatch<React.SetStateAction<ExtFile[]>>] => {
    //state for managing the files locally
    const [localFiles, setLocalFiles] = React.useState<ExtFile[]>([]);
    // the current number of valid files
    const [numberOfValidFiles, setNumberOfValidFiles] = React.useState<number>(0);

    //Detect changes in the file item props when upload started
    //mostly for detecting 
    React.useEffect(() => {
        let arrOfExtFiles: ExtFileInstance[] | undefined =
            ExtFileManager.getExtFileInstanceList(dropzoneId);
        console.log("value changed", isUploading, value.map(F => F.uploadStatus),dropzoneId);
        // console.log("value changed", value.map(F => F.uploadStatus));
        if (!isUploading) {
            setLocalFiles(value);
        } else {
            // when is uploading
            if (arrOfExtFiles) {

                if (arrOfExtFiles.length !== value.length || value.length === 0) {
                    return;
                }
                for (let i = 0; i < arrOfExtFiles.length; i++) {
                    if (
                        (value[i].uploadStatus === undefined)
                        &&
                        (arrOfExtFiles[i].uploadStatus === "preparing")
                    ) {
                        console.log("useDropzoneFileListUpdater onCancel i", i);
                        arrOfExtFiles[i].uploadStatus = undefined;
                    }
                }
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
export default useDropzoneFileListUpdater;
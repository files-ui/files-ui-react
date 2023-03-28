import * as React from "react";
import { ExtFile } from "@files-ui/core"

/**
 * Custom hook for managing
 * @param localFiles the list of extFiles that are managed locally inside dropzone component
 * @param validateFilesFlag if true, the number will be updated with the number of files that have valid attribute as true
 * @returns the updated number of valid files
 */
export function useNumberOfValidFiles(
    localFiles: ExtFile[],
    validateFilesFlag: boolean
) {
    const [numberOfValidFiles, setNumberOfValidFiles] = React.useState<number>(0);

    React.useEffect(() => {
        if (validateFilesFlag) {
            setNumberOfValidFiles(localFiles.filter((x) => x.valid).length);
        } else {
            setNumberOfValidFiles(localFiles.length);
        }
    }, [localFiles, validateFilesFlag]);

    return numberOfValidFiles;
}
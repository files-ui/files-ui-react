import { ExtFile, ExtFileInstance } from "../types";
import { FileIdGenerator } from "./IdGenerator";

/**
 * Converts the fileList into an array of separated ExtFile objects
 * @param fileList the FileList object given by input(event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile objects
 */
export const fileListToExtFileArray = (fileList: FileList): ExtFile[] => {
    let filesValidated: ExtFile[] = [];
    for (let i = 0, f: File; (f = fileList[i]); i++) {
        filesValidated.push({ id: FileIdGenerator.getNextId(), file: f, name: f.name, size: f.size, type: f.type });
    }
    return filesValidated;
};

/**
 * Converts the fileList into an array of separated ExtFile instances
 * @param fileList the FileList object given by input (event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile instances
 */
export const fileListToExtFileInstanceArray = (fileList: FileList): ExtFileInstance[] => {
    let filesValidated: ExtFileInstance[] = [];
    for (let i = 0, f: File; (f = fileList[i]); i++) {
        filesValidated.push(new ExtFileInstance({ id: FileIdGenerator.getNextId(), file: f, name: f.name, size: f.size, type: f.type  }));
    }
    return filesValidated;
};
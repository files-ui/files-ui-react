import { ExtFile } from "../types";

export const isUploadAbleExtFile = (extFile: ExtFile, validateFilesFlag: boolean) => {
    return (!validateFilesFlag || (validateFilesFlag && extFile.valid)) && extFile.uploadStatus !== "success";
}
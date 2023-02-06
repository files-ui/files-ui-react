import { ExtFile, UPLOADSTATUS } from "../types";
import { FileIdGenerator, getRandomInt } from "../utils";
import { listOfErrors } from "../validation";
import { getRandomUploadStatus } from "../validation/randomStatus";

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
 export const makeSyntheticExtFile = (
    file?: File ,
    valid = (Math.ceil(Math.random() * 28) % 2 === 0),
    uploadStatus?: UPLOADSTATUS,
    uploadMessage?: string
): ExtFile => {
    //if valid, naturally, can be uploaded
    let errors: string[] | undefined = [];
    let newUpoadStatus = uploadStatus || getRandomUploadStatus();

    let customUploadMessage: string | undefined = uploadMessage || "";
    if (valid) {
        //we can decide according to upload status 
        if (!uploadMessage) {
            switch (newUpoadStatus) {
                case "error": customUploadMessage = "Upload failed. There was an error"; break;
                case "success": customUploadMessage = "File was successfully upload"; break;
                default: uploadMessage = undefined;
            }
        }
        errors = undefined;
    } else {
        //if not valid, just show error messages
        const randInt: number = getRandomInt(0, 3);
        errors.push(listOfErrors[randInt]);
        newUpoadStatus = undefined;
        customUploadMessage = undefined;
    }
    //now make a File Validated instance 
    const newFileValidated: ExtFile = {
        id: FileIdGenerator.getNextId(),
        valid: valid,
        file: file,
        uploadStatus: newUpoadStatus,
        uploadMessage: customUploadMessage,
        errors: errors
    };
    return newFileValidated;
}

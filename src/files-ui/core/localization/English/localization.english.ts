import { fileSizeFormater } from "../../utils/fileSizeFormatter";
import { LocalLabels } from "../../types";

/**
 * English translation for Dropzone component
 */
export const DropzoneEnglish: LocalLabels = {
    defaultLabel: "Drop your files here",
    uploadingMessage: (amountOfFiles) => { return `Uploading ${amountOfFiles} files`; },
    uploadFinished: (uploaded, rejected) => `Uploaded files: ${uploaded}, Rejected files: ${rejected}`,
    noFilesMessage: `There is no missing valid file to upload`,
    footer: {
        acceptAll: `All file types accepted`,
        acceptCustom: (accept) => `Allowed types: ${accept}`
    },
    header: {
        uploadFilesMessage: "Upload files",
        maxSizeMessage: (maxFileSize) => `Max file size: ${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Files ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "File was successfuly uploaded",
    fakeUploadError: "Error on uploading. Please try again later.",
}

/**
 * English translation for FileItem component
 */
export const FileItemEnglish: LocalLabels = {
    fullInfoLayer: {
        name: `Name: `,
        size: "Size: ",
        type: "Type: "
    },
    status: {
        preparing:"Preparing",
        uploading: "Uploading",
        success: "Success",
        valid: "Valid",
        denied: "Not valid",
        error: "Error",
        aborted:"Aborted"
    },
}

/**
 * English translation for Validation Errors
 */
export const ValidateErrorEnglish: LocalLabels = {
    maxSizeError: (maxSize) =>
        `File is too big. Max file size allowed is ${fileSizeFormater(maxSize as number)}`,
    acceptError: `File type is not allowed`,
    maxFileCount: (maxFiles) =>
        `Max amount of files (${maxFiles}) has been reached`
}
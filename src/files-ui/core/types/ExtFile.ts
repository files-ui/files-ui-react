import { createSyntheticFile } from "../synthetic-file";
import { FileIdGenerator } from "../utils/IdGenerator";
import { listOfErrors } from "../validation";
import { UPLOADSTATUS } from "./UploadStatus";
import { ServerResponse } from "./uploadTypes";

/**
 * ExtFile === "Extended File".
 * This object "extends" the File Object
 */
export declare type ExtFile = {
    /** 
     * An identifier for the extFile
     */
    id?: number | string | undefined;
    /**
     * The file object. Used mostly when user selects or drops files in the client sid.
     */
    file?: File;
    /**
     * The name of the file. Used mostly for displaying file data from server.
     */
    name?: string;
    /**
     * The type of the file. Used mostly for displaying file data from server.
     */
    type?: string;
    /**
     * The size of the file. Used mostly for displaying file data from server.
     */
    size?: number;

    imageUrl?: string;
    /**
     * a flag that determines whether the file is valid, not valid or it is not validated.
     */
    valid?: boolean;
    /**
     * The list of errors when the file was validated
     */
    errors?: string[];
    /**
     * A message that shows the result of the upload process
     */
    uploadMessage?: string;
    /**
     * The current upload status. (e.g. "uploading")
     */
    uploadStatus?: UPLOADSTATUS | undefined;
    /**
     * The XMLHttpRequest object for performing uploads to a server
     */
    xhr?: XMLHttpRequest;
    /**
     * The current percentage of upload progress.
     * This value will have a higher priority over the upload progress value calculated inside the component.
     * @default undefined
     */
    progress?: number;
    /**
     * The additional data that will be sent to the server
     * when filesare uploaded individually
     */
    extraUploadData?: Record<string, any>;
    /**
     * Any kind of extra data that could be needed
     * 
     */
    extraData?: Object;
    /**
     * The upload response from server
     */
    serverResponse?: ServerResponse;
    /**
     * Url to perform a GET request in order to download the file.
     * This action is triggered when download button is clicked or pressed.
     * In case onDownload prop is given
     */
    downloadUrl?: string;
}

/**
 * A class definition for ExtFile.
 * This class has the purpose to allow the creation of instances
 * of an ExtFile for performing complex operations that cannot be
 * accomplished just by using the ExtFile type.
 * For instance, it can help in changing the value of some attributes
 * across different scopes thanks to memory reference.
 */
export class ExtFileInstance {
    /**
     * An identifier for the extFile
     */
    public id?: number | string;
    /**
     * The file object. Used mostly when user selects or drops files in the client sid.
     */
    public file?: File;
    /**
     * The name of the file. Used mostly for displaying file data from server.
     */
    public name?: string;
    /**
     * The type of the file. Used mostly for displaying file data from server.
     */
    public type?: string;
    /**
     * The size of the file. Used mostly for displaying file data from server.
     */
    public size?: number;

    public imageUrl?: string;
    /**
     * A flag that determines whether the file is valid, not valid or it is not validated.
     */
    public valid?: boolean;
    /**
     * The list of errors when the file was validated
     */
    public errors?: string[];
    /**
     * A message that shows the result of the upload process
     */
    public uploadMessage?: string;
    /**
     * The current upload status. (e.g. "uploading")
     */
    public uploadStatus?: UPLOADSTATUS | undefined;
    /**
     * The current upload progress
     */
    public progress?: number;
    /**
     * The XMLHttpRequest object for performing uploads to a server
     */
    public xhr?: XMLHttpRequest;
    /**
     * The additional data that will be sent to the server
     */
    public extraData?: Record<string, any>;
    /**
     * The additional data that will be sent to the server
     * when filesare uploaded individually
     */
    public extraUploadData?: Record<string, any>;
    /**
     * The upload response from server
     */
    public serverResponse?: ServerResponse;
    /**
     * Url to perform a GET request in order to download the file.
     * This  action is triggered when download button is clicked or pressed.
     * In case onDownload prop is given
     */
    public downloadUrl?: string;
    constructor(extFile: ExtFile) {
        const {
            id,
            file,
            name,
            size,
            type,
            imageUrl,
            valid,
            errors,
            uploadMessage,
            uploadStatus,
            progress,
            xhr,
            extraData,
            extraUploadData,
            serverResponse,
            downloadUrl
        } = extFile;

        this.id = id;
        this.file = file;
        this.name = name;
        this.size = size;
        this.type = type;
        this.imageUrl = imageUrl;

        this.valid = valid;
        this.errors = errors;
        this.uploadStatus = uploadStatus;
        this.uploadMessage = uploadMessage;
        this.progress = progress;
        this.xhr = xhr;

        this.extraData = extraData;
        this.extraUploadData = extraUploadData;
        this.serverResponse = serverResponse;

        this.downloadUrl = downloadUrl;
    }
    /**
     * method under construction
     */
    private static kamuiFile() {

    }

    static toExtFile(extFile: ExtFileInstance): ExtFile {
        const
            {
                id,
                file,
                name,
                size,
                type,
                imageUrl,
                valid,
                errors,
                uploadMessage,
                uploadStatus,
                progress,
                xhr,
                extraData,
                extraUploadData,
                serverResponse,
                downloadUrl
            } = extFile;
        return {
            id,
            file,
            name,
            size,
            type,
            imageUrl,
            valid,
            errors,
            uploadMessage,
            uploadStatus,
            progress,
            xhr,
            extraData,
            extraUploadData,
            serverResponse,
            downloadUrl
        };
    }
    toExtFile(): ExtFile {
        const {
            id,
            file,
            name,
            size,
            type,
            imageUrl,
            valid,
            errors,
            uploadMessage,
            uploadStatus,
            progress,
            xhr,
            extraData,
            extraUploadData,
            serverResponse,
            downloadUrl
        } = this;

        const result: ExtFile = {
            id,
            file,
            name,
            size,
            type,
            imageUrl,
            valid,
            errors,
            uploadMessage,
            uploadStatus,
            progress,
            xhr,
            extraData,
            extraUploadData,
            serverResponse,
            downloadUrl
        };
        return result;
    }

    static mock = (): ExtFileInstance => {
        return new ExtFileInstance(
            extFileMock()
        );
    }
}
export const extFileMock = (): ExtFile => {
    return {
        id: FileIdGenerator.getNextId(),
        name: "fileName.ext",
        size: 28 * 1024 * 1024,
        type: "files-ui/mock",
        file: createSyntheticFile("fileName.ext", 28 * 1024 * 1024, "files-ui/mock"),
        errors: listOfErrors,
        uploadMessage: "uploaded",
        uploadStatus: "preparing",
        valid: false,
        progress: 28,
        xhr: new XMLHttpRequest(),
        extraData: {
            extraData1: "files-ui is the best",
            extraData2: {
                id: 1,
                name: "files-ui.mock"
            },
            deleted: true
        },
        downloadUrl: "https://www.files-ui.com/mock/file-download"
    }
}


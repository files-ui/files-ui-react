import { UPLOADSTATUS, ServerResponse } from "../types";
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
    /**
     * a flag that determines whether the file is valid, not valid or it is not validated.
     */
    valid?: boolean;
    /**
     * The list of errors when the file was validated
     */
    errors?: string[];
    /**
     * The current upload status. (e.g. "uploading")
     */
    uploadStatus?: UPLOADSTATUS | undefined;
    /**
     * A message that shows the result of the upload process
     */
    uploadMessage?: string;
    /**
     * Link, URI or string representation of an image
     */
    imageUrl?: string;
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
     * when files are uploaded individually
     */
    extraUploadData?: Record<string, any>;
    /**
     * Any kind of extra data that could be needed.
     */
    extraData?: Object;
    /**
     * The upload response from server
     */
    serverResponse?: ServerResponse;
    /**
     * The url to be used to perform a GET request in order to download the
        file. If defined, the download icon will be shown.
     */
    downloadUrl?: string;
    /**
     * Link, URI, FIle object or string representation of a video
     */
    videoUrl?: string;
};
/**
 * A class definition for ExtFile.
 * This class has the purpose to allow the creation of instances
 * of an ExtFile for performing complex operations that cannot be
 * accomplished just by using the ExtFile type.
 * For instance, it can help in changing the value of some attributes
 * across different scopes thanks to memory reference.
 */
export declare class ExtFileInstance {
    /**
     * An identifier for the extFile
     */
    id?: number | string;
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
     * A flag that determines whether the file is valid, not valid or it is not validated.
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
     * The current upload progress
     */
    progress?: number;
    /**
     * The XMLHttpRequest object for performing uploads to a server
     */
    xhr?: XMLHttpRequest;
    /**
     * The additional data that will be sent to the server
     */
    extraData?: Record<string, any>;
    /**
     * The additional data that will be sent to the server
     * when filesare uploaded individually
     */
    extraUploadData?: Record<string, any>;
    /**
     * The upload response from server
     */
    serverResponse?: ServerResponse;
    /**
     * Url to perform a GET request in order to download the file.
     * This  action is triggered when download button is clicked or pressed.
     * In case onDownload prop is given
     */
    downloadUrl?: string;
    /**
     * Link, URI, FIle object or string representation of a video
     */
    videoUrl?: string;
    constructor(extFile: ExtFile);
    /**
     * method under construction
     */
    /**
     * Copies all non undefined attributes from ExtFileInstance to a new ExtFile object
     * @param extFileInstance the instance of ExtFile
     * @returns an ExtFile object
     */
    static toExtFile(extFileInstance: ExtFileInstance): ExtFile;
    /**
     * Copies all non undefined attributes from ExtFileInstance to a new ExtFile object.
     * @returns an ExtFile object
     */
    toExtFile(): ExtFile;
}

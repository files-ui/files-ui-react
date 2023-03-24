export declare type FileValidatorProps = {
    /**
     * max file size in bytes
     */
    maxFileSize?: number;
    /**
     * a comma separated list of mime types or file extensions.
     */
    accept?: string;
};
export declare type ValidateFileResponse = {
    /**
     * if true, that means the file is valid
     */
    valid: boolean;
    /**
     * the list of erros associated with an specific file
     */
    errors?: string[];
};

import { ExtFile, Localization, LocalLabels } from "../types";
import { ValidateFileResponse, FileValidatorProps } from "../types/validation";
/**
 *
 * @param preValidatedFiles FileList
 * @param remainingValids The number of remaining valid files
 * @param localValidator
 * @param validator
 * @param maxFiles
 * @param localization
 * @returns
 */
export declare const fileListvalidator: (preValidatedFiles: FileList, remainingValids: number, localValidator: FileValidatorProps, validator?: (f: File) => ValidateFileResponse, maxFiles?: number, localization?: Localization) => ExtFile[];
/**
 * For each ExtFile sets the valid prop of ExtFile to "true" or "false"
 * depending on the result of the individual validation.
 * It also add the list of errors.
 * @param extFileList
 * @param remainingValids
 * @param localValidatorProps
 * @param validator
 * @param maxFiles
 * @param localization
 * @returns a new ExtFile list with each item validated
 */
export declare const validateExtFileList: (extFileList: ExtFile[], remainingValids: number, localValidatorProps: FileValidatorProps, validator?: (f: File) => ValidateFileResponse, maxFiles?: number, localization?: Localization) => ExtFile[];
/**
 *
 * @param extFile
 * @param validator
 * @param validatorProps
 * @param localErrors
 * @returns
 */
export declare const validateExtFile: (extFile: ExtFile, validator: (f: File) => ValidateFileResponse, validatorProps: FileValidatorProps, localErrors: LocalLabels) => ExtFile;
/**
 * Function that validate whether a file is valid, or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validatorProps the validator object
 * @returns a FileValidated object
 */
export declare const validateFile: (file: File, validator: (f: File) => ValidateFileResponse, validatorProps: FileValidatorProps, localErrors: LocalLabels) => ExtFile;

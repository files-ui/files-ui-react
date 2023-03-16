import { ValidateErrorLocalizerSelector } from "../localization";
import { ExtFile, FunctionLabel, Localization, LocalLabels } from "../types";
import { CustomValidateFileResponse, FileValidatorProps } from "../types/validation";
import { FileIdGenerator } from "../utils/IdGenerator";
import { separateAccept } from "./separateAccept";
import { validateAccept } from "./validateAccept";

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
export const fileListvalidator = (
    preValidatedFiles: FileList,
    remainingValids: number,
    localValidator: FileValidatorProps,
    validator: ((f: File) => CustomValidateFileResponse) | undefined,
    maxFiles?: number,
    localization?: Localization
): ExtFile[] => {
    const output: ExtFile[] = [];
    //set a countdown when there is a limit on files
    let countdown: number = remainingValids;
    // get localized labels
    const ValidationErrorLocalizer: LocalLabels =
        ValidateErrorLocalizerSelector(localization);
    //Iterate the File list
    for (let i = 0, f: File; (f = preValidatedFiles[i]); i++) {
        // Validate the file list with
        let validatedFile: ExtFile = validateFile(f, validator, localValidator, ValidationErrorLocalizer);
        if (validatedFile.valid) {
            //not valid due to file count limit
            const valid = countdown > 0;
            validatedFile.valid = valid;
            //add error about amount
            if (!valid) {
                const maxFileErrorMessenger: FunctionLabel = ValidationErrorLocalizer.maxFileCount as FunctionLabel;
                validatedFile.errors = validatedFile.errors
                    ? [...validatedFile.errors, maxFileErrorMessenger(maxFiles || Infinity)]
                    : [maxFileErrorMessenger(maxFiles || Infinity)];
            }
            countdown--;
        }
        output.push(validatedFile);
    }
    return output;
};


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
export const validateExtFileList = (
    extFileList: ExtFile[],
    remainingValids: number,
    localValidatorProps: FileValidatorProps,
    validator: ((f: File) => CustomValidateFileResponse) | undefined,
    maxFiles: number | undefined,
    localization?: Localization
): ExtFile[] => {
    console.log("remaning valids", remainingValids);
    let fileListResult: ExtFile[] = [];
    if (!remainingValids) return fileListResult;
    let remaining: number = remainingValids;
    const ValidationErrorLocalizer: LocalLabels =
        ValidateErrorLocalizerSelector(localization);
    const maxFileErrorMessenger: FunctionLabel = ValidationErrorLocalizer.maxFileCount as FunctionLabel;
    for (let i = 0; i < extFileList.length; i++) {
        let currentExtFile: ExtFile = extFileList[i];

        currentExtFile = validateExtFile(currentExtFile, validator, localValidatorProps, ValidationErrorLocalizer);
        //console.log("validateExtFileList after validation", currentExtFile);

        if (currentExtFile.valid) {
            //not valid due to file count limit
            const valid = remaining > 0;
            currentExtFile.valid = valid;
            //add error about amount
            if (!valid) {
                currentExtFile.errors = currentExtFile.errors
                    ? [...currentExtFile.errors, maxFileErrorMessenger(maxFiles || Infinity)]
                    : [maxFileErrorMessenger(maxFiles || Infinity)];
            }
            remaining--;
        }
        fileListResult.push(currentExtFile);

    }
    return fileListResult;
}

/**
 * 
 * @param extFile 
 * @param validator 
 * @param validatorProps 
 * @param localErrors 
 * @returns 
 */
export const validateExtFile = (
    extFile: ExtFile,
    validator: undefined | ((f: File) => CustomValidateFileResponse),
    validatorProps: FileValidatorProps,
    localErrors: LocalLabels
): ExtFile => {
    let extFileResult: ExtFile = { ...extFile };
    let errors: string[] = [];
    //TO-DO: Add extra validation for individual props even if FIle object was not given
    if (!extFile.file) {
        return { ...extFileResult }
    }

    //TO-DO: add "overrideValidation" prop to ignore the rest of validators like accept and maxFileSize
    if (validator) {
        const resultCustomValidation: CustomValidateFileResponse = validator(extFileResult.file as File);
        const { errors: errorsResult } = resultCustomValidation;
        if (errorsResult)
            errors.push(...errorsResult)
        //return { ...extFileResult, ...validator(extFileResult.file as File) };
    }

    const { maxFileSize, accept } = validatorProps;
    console.log("Validation", maxFileSize, accept);
    //check file size
    const file: File = extFile.file;


    if (maxFileSize && file.size > maxFileSize) {
        const maxFileSizeErrorMessenger: FunctionLabel = localErrors.maxSizeError as FunctionLabel;

        console.log("Size error", maxFileSizeErrorMessenger(maxFileSize));

        errors.push(maxFileSizeErrorMessenger(maxFileSize));
    }
    //check file type
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(localErrors.acceptError as string);
    }
    const isValid: boolean = errors.length === 0;
    extFileResult = { ...extFileResult, valid: isValid, errors: !isValid ? errors : undefined };
    console.log("validation extFileResult", extFileResult);
    return extFileResult;

}



/**
 * Function that validate whether a file is valid, or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validatorProps the validator object 
 * @returns a FileValidated object
 */
export const validateFile = (
    file: File,
    validator: undefined | ((f: File) => CustomValidateFileResponse),
    validatorProps: FileValidatorProps,
    localErrors: LocalLabels
): ExtFile => {

    const idGenerated = FileIdGenerator.getNextId();
    let errors: string[] = [];
    if (validator) {
        return { id: idGenerated, file, ...validator(file) };
    }

    const { maxFileSize, accept } = validatorProps;

    //check file size
    if (maxFileSize && file.size > maxFileSize) {
        const maxFileSizeErrorMessenger: FunctionLabel = localErrors.maxSizeError as FunctionLabel;
        errors.push(maxFileSizeErrorMessenger(maxFileSize));
    }

    //check file type
    // const allowedTypes = accept.filter((type) => (file.type === type))
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(localErrors.acceptError as string);
    }


    const fileResult: ExtFile = {
        id: idGenerated,
        file: file,
        valid: errors.length === 0,
        errors: errors
    };
    // logic here
    return fileResult;
};
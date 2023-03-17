import { CustomValidateFileResponse, ExtFile, Localization, UploadConfig, UploadResponse } from "../../core";
import { DropzoneActions } from "../dropzone/components/dropzone/DropzoneProps";
import { MaterialButtonProps } from "../material-button/MaterialButtonProps";
//import { OverridableComponentProps } from "../overridable";

interface InputButtonFullProps {
    /**
     * Probably one of the most important methods (callbacks).
     * `onChange()` returns as first parameter an array of `ExtFile` objects,
     * with at least the following structure:
     * 
     * ```jsx
     * export type ExtFile =
     * {
     *    id: number | string | undefined;
     *    file: File;
     *    valid: boolean;
     *    errors?: string[];
     *    uploadMessage?: string;
     *    uploadStatus?: undefined | "uploading", "success", "error";
     * }
     * ```
     * This event is triggered when upload starts and when upload 
     * finishes for each file in order to update the props on each ExtFile
     */
    onChange?: (files: ExtFile[]) => void;
    /**
     * Just like any other input component.
     * The value of the input element, required for a controlled component.
     */
    value?: ExtFile[];

    /**
    * The language to be used in Dropzone labels
    * Currently only English, French , Portuguese, Chinnese (traditional and simplyfied), Russian and Spanish are supported
    * @default "EN-en"
    */
    localization?: Localization;
    /**
   * If true, will show a ripple everytime
   * the user drops files or selects files
   */
    disableRipple?: boolean;

    ///////////////         VALIDATION STAGE        ///////////////
    /**
   * The max file size allowed in bytes
   */
    maxFileSize?: number;
    /**
     * The max number of files to be accepted.
     */
    maxFiles?: number;
    /**
    * The default implementation of accept
    * checks the file's mime type or extension
    * against this list. This is a comma
    * separated list of mime types or file extensions.
    * E.g.: 
    * ```js
    * acccept="image/*, application/pdf, .psd"
    * ```
    */
    accept?: string;
    /**
     * The custom validator to validate files that are selected or dropped in dropzone compoent.
     * Must be a function that recieves as first parameter a File Object
     * and must return a boolean value
     * ```jsx
     * export type CustomValidateFileResponse = {
     *  valid: boolean;
     *  errors?: string[] | undefined;
     * }
     * ```
     */
    validator?: (f: File) => CustomValidateFileResponse;

    /**
     * Flag that indicates that dropzone will automatically remove non valid files.
     * This will happen every time user drops files or selects files from file dialog.
     * This flag will only work if validation is active.
     */
    autoClean?: boolean;

    ///////////////         UPLOAD STAGE        ///////////////
    /**
  * The configuration needed for uploading the files.
  * When "uploadConfig" is not given or uploadConfig.url is undefined
  * the upload button will not be visible
  * and uploadOnDrop flag will not work
  */
    uploadConfig?: UploadConfig;
    /**
     * Flag that indicates Dropzone to perform a fake upload process.
     * If given or true, will ignore `uploadConfig` prop, will show
     * the upload button
     * Will respond with random upload status on every uploadable file
     */
    fakeUpload?: boolean;
    /**
     * This event is triggered when upload process starts
     * also returns the list of files that will be uploaded,
     * Unlike Onchange, onUploadStart will only return a list of files thta are candidates to be uploaded,
     * in case they are valid or upload status is "error"
     */
    onUploadStart?: (extFiles: ExtFile[]) => void;
    /**
    * This event returns as first aparameter the list of responses for each file following the structure:
    * responses = [
    *  {id: <the file id>, serverResponse: the server response}
    * ]
    */
    onUploadFinish?: (extFiles: ExtFile[]) => void;

  //ACTION BUTTONS
  /**
   * The configuration needed for uploading the files.
   * When "uploadConfig" is not given or uploadConfig.url is undefined
   * the upload button will not be visible
   * and uploadOnDrop flag will not work
   */
  actionButtons?: DropzoneActions;
  // ADD OR REPLACE
  /**
   * The behaviour when new files are selected or dropped
   * @default 'add'
   */
  behaviour?: 'add' | 'replace';
}

type MaterialButtonPropsOmitInputButtonFullProps = Omit<MaterialButtonProps, keyof InputButtonFullProps>;



export declare type FileInputButtonProps =

    {
        [D in keyof InputButtonFullProps]: InputButtonFullProps[D]
    } & {
        [D in keyof MaterialButtonPropsOmitInputButtonFullProps]: MaterialButtonProps[D]
    }


export const defaultFileInputButtonProps: FileInputButtonProps =
{
    textTransform: "uppercase",
    label: "browse...",
    behaviour: "add",
    disabled: false,
    uploadConfig: {},
    actionButtons: {},
    value: [],
}
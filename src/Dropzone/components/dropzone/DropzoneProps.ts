import { ExtFile, ValidateFileResponse, Localization, UploadConfig } from "@files-ui/core"

import * as React from "react";
import { OverridableComponentProps } from "../../../overridable";


export interface DropzoneFullProps extends OverridableComponentProps {
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

  ///////////////         VALIDATION STAGE        ///////////////
  /**
  * The default implementation of accept
  * checks the file's mime type or extension
  * against this list. This is a comma-separated 
  * list of one or more file types, or unique file type specifiers, 
  * describing which file types to allow.
  * E.g.: 
  * ```js
  * acccept="image/*, application/pdf, .psd"
  * ```
  */
  accept?: string;
  /**
   * The max number of files to be accepted.
   */
  maxFiles?: number;
  /**
   * The max file size allowed in bytes.
   */
  maxFileSize?: number;
  /**
   * The custom validator to validate files that are selected or dropped in dropzone compoent.
   * Must be a function that recieves as first parameter a File Object
   * and must return a boolean value
   * ```jsx
   * export type ValidateFileResponse = {
   *  valid: boolean;
   *  errors?: string[] | undefined;
   * }
   * ```
   */
  validator?: (f: File) => ValidateFileResponse;
  /**
   * When given, "clean" button will be visible if validation is active.
   * This event is triggered when "clean button is clicked"
   */
  onClean?: Function;
  /**
   * If true, the component will automatically remove non valid files when user 
   * drops files or selects them from file dialog. This flag will only work if validation is active.
   */
  autoClean?: boolean;
  /**
   * When given, "clean" button will be visible and 
   * every time user clicks the buttom it will trigger the default "clean operation":
   * Remove non valid files.
   * This flag will only work if validation is active.
   */
  cleanFiles?: boolean;

  ///////////////         UPLOAD STAGE        ///////////////
  /**
  * The configuration needed for uploading the files.
  * When "uploadConfig" is not given or uploadConfig.url is undefined
  * the upload button will not be visible
  * and uploadOnDrop prop flag will not work.
  */
  uploadConfig?: UploadConfig;
  /**
   * If set, the component will simulate the upload operation by randomly
        setting the upload status and message on each uploadable{" "}
        <TypeHighlight>ExtFile</TypeHighlight>. It will also set a fake
        progress. Also the `uploadConfig` prop will be ignored and will show
   * the upload button
   */
  fakeUpload?: boolean;
  /**
   * If set, will upload all loaded files in a single multipart request appending array of files
   * to the FormData files key
   */
  groupUpload?: boolean;
  /**
   * Callback fired when the upload process starts.
   */
  onUploadStart?: (uploadAbleFiles: ExtFile[]) => void;
  /**
  * Callback fired when the upload process ends.
  */
  onUploadFinish?: (uploadedFiles: ExtFile[]) => void;


  ///////////////          STYLING          ///////////    
  //borderRadius?: string | number;
  /**
   * The background color for dropzone container.
   * @default 'transparent'
   */
  background?: string;
  /**
   * The min height of the component.
   * If the value is given in number format, "px" will be assumed
   * @default "180px"
   * 
   * examples: 
   *    "50vh"
   *    "20%"
   *    "40em"
   *    "1rem"
   */
  minHeight?: string | number;

  ///////////////// LABEL ///////////////   
  /**
  * The label to place when no files were selected
  */
  label?: string;

  //LOCALIZATION
  /**
  * The language to be used in Dropzone labels
  * @default "EN-en"
  */
  localization?: Localization;

  //RIPPLE
  /**
   * If true, will not show a ripple effect everytime
   * the user drops files or clicks the dropzone for selecting files
   * @default false
   */
  disableRipple?: boolean;
  /**
   * Method for performing specific tasks on drag enter operations
   */
  onDragEnter?: (evt: React.DragEvent<HTMLDivElement>) => void;
  /**
   * Method for performing specific tasks on drag leave operations
   */
  onDragLeave?: (evt: React.DragEvent<HTMLDivElement>) => void;

  //ACTION BUTTONS
  /** If set, buttons will be added before or after of the component.
        This buttons triggresthe common opertions of the component such as
        clean, upload, abort and delete all.
   */
  actionButtons?: DropzoneActions;

  ///////// DROP LAYER
  /**
   * If `true`, the drop operation will be performed in a layer that covers the complete component container.
   * @default true
   */
  dropOnLayer?: boolean;

  // HEADER AND FOOTER
  /**
   * If false, hides the dropzone footer.
   * @default true
   */
  footer?: boolean;
  /**
   * If false, hides the dropzone header.
   * @default true
   */
  header?: boolean;
  /**
   * Configuration related to the dropzone header.
   */
  headerConfig?: HeaderConfig;
  /**
   * Configuration  related to the dropzone footer.
   */
  footerConfig?: FooterConfig;

  //DISABLED
  /**
  * If `true`, the component is disabled.
  * @default false
  */
  disabled?: boolean;
  //CLICKABLE
  /** 
    * If false, the component will not be clickable. So, file dialog will not be opened.
    * @default true
    */
  clickable?: boolean;

  // ADD OR REPLACE
  /**
   * The behaviour when new files are selected or dropped
   * @default 'add'
   */
  behaviour?: 'add' | 'replace';
}


export type HeaderConfig = {
  customHeader?: React.ReactNode;
  deleteFiles?: boolean;
  cleanFiles?: boolean;
  uploadFiles?: boolean;
  uploadingIcon?: boolean;
  maxFileSize?: boolean;
  validFilesCount?: boolean;
  style?: React.CSSProperties;
  className?: string;
  resetStyles?: boolean;
}

export type FooterConfig = {
  /**
   * Allowed types: .png,image/*
   */
  allowedTypesLabel?: boolean;
  /**
   * 
   */
  uploadProgressMessage?: boolean;
  /**
   * 
   */
  uploadResultMessage?: boolean;
  /**
   * 
   */
  noMissingFilesLabel?: boolean;

  customMessage?: React.ReactNode;

  customFooter?: React.ReactNode;

  style?: React.CSSProperties;
  className?: string;
  resetStyles?: boolean;
}


export type ActionButtonItem = {
  children?: React.ReactNode;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
  resetStyles?: boolean;
  onClick?: Function;
  disabled?: boolean;
}

export interface DropzoneActions {
  position?: "before" | "after";
  style?: React.CSSProperties;
  className?: string;
  uploadButton?: ActionButtonItem;
  abortButton?: ActionButtonItem;
  deleteButton?: ActionButtonItem;
  cleanButton?: ActionButtonItem;
}
export type ActionButtons = {
  [P in keyof DropzoneActions]: DropzoneActions[P]
}


type DefDivProps = React.HTMLProps<HTMLDivElement>;
type DivPropsOmitDropzoneFullProps = Omit<DefDivProps, keyof DropzoneFullProps>;

export declare type DropzoneProps =
  DivPropsOmitDropzoneFullProps &
  {
    [D in keyof DropzoneFullProps]: DropzoneFullProps[D]
  }


export const defaultDrozoneProps: DropzoneProps =
{
  clickable: true,
  behaviour: "add",
  disabled: false,
  dropOnLayer: true,
  uploadConfig: {},
  actionButtons: {},
  header: true,
  footer: true,
  value: [],
  //borderRadius: "8px"
}

export const DEFAULT_BORDER_RADIUS = "8px";


/* 
export interface AdvancedConfigItem {
  style?: React.CSSProperties;
  className?: string;
}

export type DropzoneAdvancedConfig = {
  dropzoneLayer: any;
  dropzoneContainer: any;
  dropzoneLabel: any;
}
 */
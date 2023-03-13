import { ExtFile, CustomValidateFileResponse, Localization, UploadConfig, UploadResponse } from "../../../../core";

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

  ///////////////          STYLING          ///////////                             
  /**
   * The background color for dropzone container,
   * @default 'transparent'
   */
  backgroundColor?: string;
  /**
   * The min height of the container in string format
   * If the value is given un number format "px" will be assumed
   * @default "190px"
   * 
   * examples: 
   *    "50vh"
   *    "20%"
   *    "40em"
   *    "1rem"
   */
  minHeight?: string | number;
  ///////////////          DISPLAY SETTINGS          ///////////    
  /**
   * If false, hides the dropzone footer
   * By default is true
   */
  footer?: boolean;
  /**
   * If false, hides the dropzone header
   * By default is true
   */
  header?: boolean;
  /**
  * The label to place when no files were selected
  */
  label?: string;
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
   * When given, "clean" button will be visible if validation is active.
   * This event is triggered when "clean button is clicked"
   * Returns as first parameter the list of files without not valid files
   */
  onClean?: Function;
  /**
   * Flag that indicates that dropzone will automatically remove non valid files.
   * This will happen every time user drops files or selects files from file dialog.
   * This flag will only work if validation is active.
   */
  autoClean?: boolean;
  /**
   * When given, "clean" button will be visible and 
   * every time user clicks the buttom it will trigger the default "clean operation":
   * Remove non valid files.
   * This flag will only work if validation is active.
   */
  cleanFiles?: boolean;
  ///////// INPUT
  /** 
  * If true, the dropzone component itself will be clickable
  * If false, the file dialog will not be opened
  * @default true
  */
  clickable?: boolean;
  /**
   * The behaviour when new files are selected or dropped
   * @default 'add'
   */
  behaviour?: 'add' | 'replace';
  /**
  * If `true`, the component is disabled.
  * @default false
  */
  disabled?: boolean;
  /**
   * If `true`, the drop operation will be performed in a layer that covers the complete component container.
   * @default true
   */
  dropOnLayer?: boolean;
  /**
   * Method for performing specific tasks on drag enter operations
   */
  onDragEnter?: (evt: React.DragEvent<HTMLDivElement>) => void;
  /**
   * Method for performing specific tasks on drag leave operations
   */
  onDragLeave?: (evt: React.DragEvent<HTMLDivElement>) => void;


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
  onUploadStart?: (files: ExtFile[]) => void;
  /**
  * This event returns as first aparameter the list of responses for each file following the structure:
  * responses = [
  *  {id: <the file id>, serverResponse: the server response}
  * ]
  */
  onUploadFinish?: (responses: UploadResponse[]) => void;


  /**
   * The configuration needed for uploading the files.
   * When "uploadConfig" is not given or uploadConfig.url is undefined
   * the upload button will not be visible
   * and uploadOnDrop flag will not work
   */
  actionButtons?: DropzoneActions;

  //advancedConfig?: DropzoneAdvancedConfig;

  headerConfig?: HeaderConfig;

  footerConfg?: FooterConfig;
}


export type HeaderItems = {
  deleteFiles?: boolean;
  cleanFiles?: boolean;
  uploadFiles?: boolean;
  uploading?: boolean;
  maxFileSize?: boolean;
  validFilesCount?: boolean;
}
export interface HeaderConfigMap extends OverridableComponentProps {
  customHeader?: JSX.Element;
}
export type HeaderConfig =
  {
    [P in keyof HeaderConfigMap]: HeaderConfigMap[P]
  } & {
    [H in keyof HeaderItems]: HeaderItems[H]
  }
export interface FooterConfigMap extends OverridableComponentProps {
  customFooter?: JSX.Element;
}
export type FooterItems = {
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
}

export type FooterConfig =
  {
    [P in keyof FooterConfigMap]: FooterConfigMap[P]
  } & {
    [H in keyof FooterItems]: FooterItems[H]
  }


export type DropzoneActionButton = {
  children: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
  className?: string;
  resetStyles: boolean;
  onClick?: Function;
}

export interface DropzoneActions {
  position?: "top" | "bottom";
  style?: React.CSSProperties;
  className?: string;
  uploadButton?: DropzoneActionButton;
  abortButton?: DropzoneActionButton;
  deleteButton?: DropzoneActionButton;
  cleanButton?: DropzoneActionButton;
}


export interface AdvancedConfigItem {
  style?: React.CSSProperties;
  className?: string;
}

export type DropzoneAdvancedConfig = {
  dropzoneLayer: any;
  dropzoneContainer: any;
  dropzoneLabel: any;
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
}
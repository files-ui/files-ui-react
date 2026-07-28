import * as React from "react";
import {
  Localization,
  ExtFile,
  cleanInput,
} from "@files-ui/core";
import { DropzoneActions } from "../Dropzone/components/dropzone/DropzoneProps";
import DropzoneButtons from "../Dropzone/components/DropzoneButtons/DropzoneButtons";
import { FilesUiContext } from "../FilesUiProvider/FilesUiContext";
import InputHidden from "../InputHidden/InputHidden";
import { MaterialButton } from "../MaterialButton";

import { mergeProps } from "../overridable";
import { handleClickInput } from "../utils";
import {
  defaultFileInputButtonProps,
  FileInputButtonProps,
} from "./InputButtonProps";
import { useFilesUI } from "../hooks";

/**
 * FileInputButton component - refactored to use useFilesUI hook
 * 
 * A Material-UI style button for file selection with validation and upload capabilities
 */
const FileInputButtonClient: React.FC<FileInputButtonProps> = (
  props: FileInputButtonProps
) => {
  const {
    //basic
    value = [],
    onChange,
    //validation
    accept,
    maxFileSize,
    maxFiles,
    validator,
    autoClean,
    //uploading
    uploadConfig,
    maxConcurrentUploads,
    fakeUpload,
    onUploadStart,
    onUploadFinish,
    //styling
    color,
    style,
    textColor,
    textTransform,
    className,
    //label
    label,
    //localization
    localization: locProps,
    //ripple
    disableRipple,
    //action buttons
    actionButtons,
    //disabled
    disabled,
    //add or replace
    behaviour,
    //content
    children,

    variant,
    resetStyles,
    darkMode: darkModeProp,
    ...rest
  } = mergeProps(props, defaultFileInputButtonProps);
  
  //context
  const context = React.useContext(FilesUiContext);
  const darkModeContext = context?.darkMode;
  const locContext = context?.localization;
  const localization: Localization | undefined =
    locProps !== undefined ? locProps : locContext;
  const darkMode: boolean | undefined =
    darkModeProp !== undefined ? darkModeProp : darkModeContext;

  const {
    url,
    method,
    headers,
    uploadLabel,
    cleanOnUpload = true,
    autoUpload = false,
    urlFromExtFile,
    asBlob = false,
  } = uploadConfig || {};

  // Extended upload config (not in UploadConfig type yet)
  const chunked = (uploadConfig as any)?.chunked ?? false;
  const chunkSize = (uploadConfig as any)?.chunkSize;
  const maxConcurrentUploadsConfig = maxConcurrentUploads || (uploadConfig as any)?.maxConcurrentUploads;

  const {
    position: actionButtonsPosition,
    abortButton,
    deleteButton,
    uploadButton,
    cleanButton,
    style: containerStyle,
    className: containerClassName,
  } = actionButtons as DropzoneActions;

  //ref to the hidden input tag
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Use the headless useFilesUI hook
  const {
    files: localFiles,
    numberOfValidFiles,
    isUploading,
    removeFile,
    clearFiles,
    cleanFiles: cleanInvalidFiles,
    uploadFiles,
    abortUpload,
    getInputProps,
  } = useFilesUI({
    accept,
    maxFileSize,
    maxFiles,
    validator,
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel,
    asBlob,
    chunked,
    chunkSize,
    maxConcurrentUploads: maxConcurrentUploadsConfig,
    behaviour,
    autoClean,
    cleanOnUpload,
    localization,
    onChange,
    onUploadStart,
    onUploadFinish,
    value,
  });

  // Auto-upload when files are added
  React.useEffect(() => {
    if (autoUpload && localFiles.length > 0 && !isUploading) {
      const hasUploadableFiles = localFiles.some(
        (f) => f.valid !== false && !f.uploadStatus
      );
      if (hasUploadableFiles) {
        uploadFiles();
      }
    }
  }, [autoUpload, localFiles, isUploading, uploadFiles]);

  // Flag that determines whether to validate or not
  const validateFilesFlag: boolean = Boolean(
    accept || maxFileSize || maxFiles || validator
  );

  // Get input props from useFilesUI
  const inputProps = getInputProps();

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    inputProps.onChange(evt);
    // Clean input element to trigger onChange event on input
    cleanInput(inputRef.current);
  };

  // HANDLERS for CLICK
  function handleClick(): void {
    if (disabled) return;
    handleClickInput(inputRef.current);
  }

  /**
   * reset the complete file list
   */
  const handleReset = (): void => {
    clearFiles();
  };
  
  const handleClean = (): void => {
    cleanInvalidFiles();
  };

  return (
    <React.Fragment>
      {actionButtonsPosition === "before" && (
        <DropzoneButtons
          disabled={disabled}
          abortButton={isUploading ? abortButton : undefined}
          onAbort={abortUpload}
          deleteButton={deleteButton}
          onDelete={!isUploading ? handleReset : undefined}
          uploadButton={!isUploading && !autoUpload ? uploadButton : undefined}
          onUpload={!autoUpload ? () => uploadFiles() : undefined}
          cleanButton={
            validateFilesFlag && !isUploading && !autoClean
              ? cleanButton
              : undefined
          }
          onClean={handleClean}
          style={containerStyle}
          className={containerClassName}
          top={true}
        />
      )}
      <MaterialButton
        disabled={disabled}
        className={className}
        style={style}
        color={color}
        variant={variant}
        textTransform={textTransform}
        textColor={textColor}
        resetStyles={resetStyles}
        onClick={handleClick}
        disableRipple={disableRipple}
        darkMode={darkMode}
        {...rest}
      >
        {children || label}
      </MaterialButton>
      <InputHidden
        multiple={inputProps.multiple}
        accept={inputProps.accept || ""}
        inputRef={inputRef}
        onChange={handleChangeInput}
      />
      {actionButtonsPosition === "after" && (
        <DropzoneButtons
          disabled={disabled}
          abortButton={isUploading ? abortButton : undefined}
          onAbort={abortUpload}
          deleteButton={deleteButton}
          onDelete={!isUploading ? handleReset : undefined}
          uploadButton={!isUploading && !autoUpload ? uploadButton : undefined}
          onUpload={!autoUpload ? () => uploadFiles() : undefined}
          cleanButton={
            validateFilesFlag && !isUploading && !autoClean
              ? cleanButton
              : undefined
          }
          onClean={handleClean}
          style={containerStyle}
          className={containerClassName}
          top={false}
        />
      )}
    </React.Fragment>
  );
};

export default FileInputButtonClient;

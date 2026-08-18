"use client";
import * as React from "react";
import {
  DropzoneLocalizerSelector,
  ExtFile,
  LocalLabels,
  addClassName,
  Localization,
  completeAsureColor,
  cleanInput,
} from "@files-ui/core";
import { mergeProps } from "../../../overridable";
import InputHidden from "../../../InputHidden/InputHidden";
import {
  ActionButtons,
  defaultDrozoneProps,
  DropzoneProps,
  FooterConfig,
  HeaderConfig,
} from "./DropzoneProps";
import DropzoneChildrenNext from "../DropzoneChildren/DropzoneChildrenNext";
import DropzoneDisabledLayer from "../DropzoneDisabledLayer/DropzoneDisabledLayer";

import "./Dropzone.css";
import "./DropzoneRipple.css";

import DropzoneHeader from "../DropzoneHeader/DropzoneHeader";
import DropzoneFooter from "../DropzoneFooter/DropzoneFooter";
import DropzoneButtons from "../DropzoneButtons/DropzoneButtons";
import {
  createFuiRippleFromDiv,
  handleClickInput,
  handleDragUtil,
  handleDropUtil,
} from "../../../utils";
import { FilesUiContext } from "../../../FilesUiProvider/FilesUiContext";
import DropLayer from "../../../DropLayer/components/DropLayer";
import {
  useDropLayerClassName,
  useDropzoneClassName,
} from "../../../hooks";
import { useFilesUI } from "../../../hooks/useFilesUI";

/**
 * Dropzone component - refactored to use useFilesUI hook
 * 
 * Demos:
 * - [Dropzone](https://www.files-ui.com/components/dropzone)
 * 
 * API:
 * - [Dropzone API](https://www.files-ui.com/api/dropzone/)
 */
const DropzoneClient: React.FC<DropzoneProps> = (props: DropzoneProps) => {
  const {
    //basic
    onChange,
    value = [],
    //validation
    accept,
    maxFileSize,
    maxFiles,
    validator,
    cleanFiles,
    onClean,
    autoClean,
    //uploading
    uploadConfig,
    action,  // Server Actions support (NEW in v2.0.0)
    onUploadStart,
    onUploadFinish,
    //styling
    background,
    color,
    minHeight,
    style,
    className,
    //label
    label,
    //localization
    localization: locProps,
    //ripple
    disableRipple,
    //drag operations
    onDragEnter: customOnDragEnter,
    onDragLeave: customOnDragLeave,
    //action buttons
    actionButtons,
    //drop layer
    dropOnLayer,
    //header and footer
    header,
    footer,
    headerConfig = {},
    footerConfig = {},
    //disabled
    disabled,
    //open file dialog
    clickable,
    //add or replace
    behaviour,
    lazyLoad,
    lazyLoadBuffer,
    //content
    children,
    // Destructure these to prevent passing to DOM
    maxConcurrentUploads: _maxConcurrentUploads,
    withCredentials: _withCredentials,
    ...rest
  } = mergeProps(props, defaultDrozoneProps);

  //context
  const context = React.useContext(FilesUiContext);
  const locContext = context?.localization;
  const localization: Localization | undefined =
    locProps !== undefined ? locProps : locContext;

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
  const maxConcurrentUploads = (uploadConfig as any)?.maxConcurrentUploads;

  const {
    position: actionButtonsPosition,
    abortButton,
    deleteButton,
    uploadButton,
    cleanButton,
    style: containerStyle,
    className: containerClassName,
  } = actionButtons as ActionButtons;

  const styleBorderRadius: string | number | undefined = style?.borderRadius;

  const {
    cleanFiles: cleanFilesHeader = true,
    deleteFiles: deleteFilesHeader = true,
    maxFileSize: maxFileSizeHeader = true,
    uploadFiles: uploadFilesHeader = true,
    uploadingIcon: uploadingIconHeader = true,
    validFilesCount: validFilesCountHeader = true,
    customHeader,
    className: classNameHeader,
    resetStyles: resetStylesHeader = false,
    style: styleHeader,
  }: HeaderConfig = headerConfig;

  const {
    customFooter,
    noMissingFilesLabel = true,
    uploadProgressMessage = true,
    uploadResultMessage = true,
  }: FooterConfig = footerConfig;

  //localizers
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //ref to handle ripple
  const fuiRippleRefAbs = React.useRef<HTMLDivElement>(null);
  const fuiRippleRefRel = React.useRef<HTMLDivElement>(null);
  //ref to the hidden input tag
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Use the headless useFilesUI hook
  const {
    files: localFiles,
    numberOfValidFiles,
    isUploading,
    isDragging,
    addFiles,
    removeFile,
    clearFiles,
    cleanFiles: cleanInvalidFiles,
    uploadFiles,
    abortUpload,
    abortFileUpload,
    getDragHandlers,
    getInputProps,
    dropzoneId,
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
    maxConcurrentUploads,
    behaviour,
    autoClean,
    cleanOnUpload,
    localization,
    action,  // Server Actions support (NEW in v2.0.0)
    onChange,
    onUploadStart,
    onUploadFinish,
    onClean: onClean ? (files) => onClean() : undefined,
    value,
    dropzoneId: undefined, // Let useFilesUI generate one
  });

  //state for message on footer
  const [localMessage, setLocalMessage] = React.useState<string>("");

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

  //the final className
  const [
    dropzoneClassName,
    headerClassName,
    footerClassName,
    disabledLayerClassName,
  ]: [
    string | undefined,
    string | undefined,
    string | undefined,
    string | undefined
  ] = useDropzoneClassName(
    String(dropzoneId),
    className,
    color,
    background,
    minHeight
  );

  const dropLayerClassName: string = useDropLayerClassName(
    String(dropzoneId),
    color as string,
    !customOnDragEnter && !customOnDragLeave
  );

  // Get drag handlers from useFilesUI
  const {
    onDragEnter: headlessDragEnter,
    onDragLeave: headlessDragLeave,
    onDragOver: headlessDragOver,
    onDrop: headlessDrop,
  } = getDragHandlers();

  // Wrap drag handlers with custom logic
  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (evt) => {
    handleDragUtil(evt);
    if (disabled) return;
    headlessDragEnter(evt);
    customOnDragEnter?.(evt);
  };

  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (evt) => {
    if (disabled) return;
    handleDragUtil(evt);
    headlessDragLeave(evt);
    customOnDragLeave?.(evt);
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = async (evt) => {
    handleDropUtil(evt);
    if (disabled || isUploading) return;
    if (!disableRipple) makeRipple();
    headlessDrop(evt);
  };

  // HANDLERS for CLICK
  function handleClick(): void {
    if (!clickable || disabled || isUploading) return;
    makeRipple();
    handleClickInput(inputRef.current);
  }

  const handleKeyDown = React.useCallback<
    React.KeyboardEventHandler<HTMLDivElement>
  >(
    (evt: React.KeyboardEvent<HTMLDivElement>) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        handleClick();
      }
    },
    [clickable, disabled, isUploading]
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

  // RIPPLE
  const makeRipple = (): void => {
    createFuiRippleFromDiv(
      fuiRippleRefAbs.current,
      fuiRippleRefRel.current,
      color as string
    );
  };

  /************* HEADER & FOOTER ******** */
  const handleReset = (): void => {
    clearFiles();
  };

  const handleClean = (): void => {
    if (onClean) {
      onClean();
    } else {
      cleanInvalidFiles();
    }
  };

  const finalDropzoneClassNameBorder: string | undefined = !dropzoneClassName
    ? undefined
    : (isDragging && dropOnLayer) || disabled
    ? addClassName(dropzoneClassName, "files-ui-root-border-hide")
    : dropzoneClassName;

  const finalDropzoneClassNameBorderClickable: string | undefined =
    !finalDropzoneClassNameBorder
      ? undefined
      : clickable && !disabled
      ? addClassName(finalDropzoneClassNameBorder, "clickable")
      : finalDropzoneClassNameBorder;

  if (!finalDropzoneClassNameBorderClickable) return <></>;

  // Determine if validation is active
  const validateFilesFlag = Boolean(
    accept || maxFileSize || maxFiles || validator
  );

  // Determine if upload URL is present
  const shouldUpload = Boolean(url || urlFromExtFile);

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
      <div
        style={style}
        className={finalDropzoneClassNameBorderClickable}
        {...rest}
        role={clickable && !disabled ? "button" : "region"}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-label={label || "File upload dropzone"}
        aria-disabled={disabled || undefined}
        onClick={handleClick}
        onKeyDown={clickable && !disabled ? handleKeyDown : undefined}
        onDragOver={headlessDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={!dropOnLayer ? handleDragLeave : undefined}
        onDrop={!dropOnLayer ? handleDrop : undefined}
      >
        {!disableRipple && (
          <div
            ref={fuiRippleRefAbs}
            className="filesui-base-ripple-absolute"
            style={{ borderRadius: style?.borderRadius }}
          >
            <div
              ref={fuiRippleRefRel}
              className="filesui-base-ripple-relative"
            ></div>
          </div>
        )}
        <React.Fragment>
          {header ? (
            <>
              {customHeader ? (
                <>{customHeader}</>
              ) : (
                <DropzoneHeader
                  firstClassName={headerClassName}
                  color={completeAsureColor(color)}
                  style={styleHeader}
                  className={classNameHeader}
                  resetStyles={resetStylesHeader}
                  borderRadius={styleBorderRadius}
                  isUploading={isUploading && uploadingIconHeader}
                  onReset={
                    !isUploading && deleteFilesHeader ? handleReset : undefined
                  }
                  maxFileSize={
                    maxFileSize && maxFileSizeHeader ? maxFileSize : undefined
                  }
                  maxFiles={
                    maxFiles && validFilesCountHeader ? maxFiles : undefined
                  }
                  localization={localization}
                  urlPresent={shouldUpload && uploadFilesHeader}
                  onUploadStart={
                    !autoUpload && !uploadButton
                      ? () => uploadFiles()
                      : undefined
                  }
                  numberOfValidFiles={numberOfValidFiles}
                  onClean={
                    !cleanFilesHeader || isUploading || cleanButton || autoClean
                      ? undefined
                      : (cleanFiles || onClean) && validateFilesFlag
                      ? handleClean
                      : undefined
                  }
                />
              )}
            </>
          ) : (
            <></>
          )}
        </React.Fragment>

        <DropzoneChildrenNext
          label={label}
          localization={localization}
          lazyLoad={lazyLoad}
          lazyLoadBuffer={lazyLoadBuffer}
          onAbortFile={abortFileUpload}
        >
          {children}
        </DropzoneChildrenNext>

        <React.Fragment>
          {customFooter ? (
            <>{customFooter}</>
          ) : (
            <>
              {footer && (
                <DropzoneFooter
                  firstClassName={footerClassName}
                  borderRadius={styleBorderRadius}
                  accept={accept}
                  message={isUploading ? localMessage : undefined}
                  localization={localization}
                  {...footerConfig}
                />
              )}
            </>
          )}
        </React.Fragment>

        {dropOnLayer && (
          <DropLayer
            open={isDragging}
            className={
              !isDragging
                ? dropLayerClassName
                : `${dropLayerClassName} dropzone-layer-drag`
            }
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ borderRadius: style?.borderRadius }}
          />
        )}

        <InputHidden
          multiple={inputProps.multiple}
          accept={inputProps.accept || ""}
          inputRef={inputRef}
          onChange={handleChangeInput}
        />

        <DropzoneDisabledLayer
          open={disabled}
          className={disabledLayerClassName}
        />
      </div>

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

export default DropzoneClient;

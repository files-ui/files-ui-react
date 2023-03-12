import * as React from "react";
import {
  DropzoneLocalizerSelector,
  ExtFile,
  fileListToExtFileArray,
  LocalLabels,
  validateExtFileList,
  FileValidatorProps,
  isValidateActive,
  handleClickInput,
  handleDragUtil,
  createFuiRippleFromDiv,
  handleDropUtil,
  UploadConfig,
  ExtFileInstance,
  FunctionLabel,
  ExtFileManager,
  sleepPreparing,
  UploadResponse,
  instantPreparingToUploadOne,
  fakeFuiUpload,
  uploadExtFile,
  sleepTransition,
  toUploadableExtFileList,
  cleanInput,
  isUploadAbleExtFile,
  sanitizeArrExtFile,
  unexpectedErrorUploadResult,
  getRandomInt,
} from "../../../../core";
import { mergeProps } from "../../../overridable";
import InputHidden from "../../../input-hidden/InputHidden";
import {
  defaultDrozoneProps,
  //DropzoneActionButton,
  DropzoneActions,
  DropzoneProps,
} from "./DropzoneProps";
import DropzoneChildren from "./../../DropzoneChildren";
import useDropzoneClassName from "./../../useDropzoneClassName";
import DropzoneDisabledLayer from "../DropzoneDisabledLayer/DropzoneDisabledLayer";

import "./Dropzone.scss";
import "./../../DropzoneRipple.scss";
import useDropLayerClassName from "../../../drop-layer/hooks/useDropLayerClassName";
import DropLayer from "../../../drop-layer/components/DropLayer";
import useDropzoneFileListUpdater from "../../../../hooks/useDropzoneFileUpdater";
import DropzoneHeader from "../DropzoneHeader/DropzoneHeader";
import DropzoneFooter from "../DropzoneFooter/DropzoneFooter";
import DropzoneButtons from "../DropzoneButtons/DropzoneButtons";

//import { print_manager } from "../../../../../utils";

const Dropzone: React.FC<DropzoneProps> = (props: DropzoneProps) => {
  const {
    accept,
    behaviour,
    children,
    className,
    clickable,
    color,
    disabled,
    dropOnLayer,
    label,
    localization,
    maxFileSize,
    maxFiles,
    onChange,
    onDragEnter,
    onDragLeave,
    style,
    textColor,
    validator,
    value = [],
    uploadConfig,
    backgroundColor,
    disableRipple,
    fakeUpload,
    footer,
    header,
    minHeight,
    cleanFiles,
    onClean,
    autoClean,
    onUploadStart,
    onUploadFinish,
    actionButtons,
    headerConfig,
    footerConfg,
    //advancedConfig,
    ...rest
  } = mergeProps(props, defaultDrozoneProps);
  console.log("Dropzone props", children);
  console.log("Dropzone value", value);
  const {
    url,
    method,
    headers,
    uploadLabel,
    cleanOnUpload = true,
    preparingTime = 1500,
    autoUpload = false,
  } = uploadConfig as UploadConfig;

  const {
    position: actionButtonsPosition,
    abortButton,
    deleteButton,
    uploadButton,
    cleanButton,
    style: containerStyle,
    className: containerClassName,
  } = actionButtons as DropzoneActions;
  //console.log("Dropzone props", dropOnLayer);
  //localizers
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //ref to handle ripple
  const fuiRippleRefAbs = React.useRef<HTMLDivElement>(null);
  const fuiRippleRefRel = React.useRef<HTMLDivElement>(null);
  //ref to the hidden input tag
  const inputRef = React.useRef<HTMLInputElement>(null);
  //state for drag operation
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  //state for checking upload start
  const [isUploading, setIsUploading] = React.useState<boolean>(false);
  //state for message on footer
  const [localMessage, setLocalMessage] = React.useState<string>("");
  //Id for uploding through FuiFileManager
  //const dropzoneId: string | number = useDropzoneFileListID();
  const dropzoneId: string | number = React.useId();
  //React.useId();
  //Flag that determines whether to validate or not
  const validateFilesFlag: boolean = isValidateActive(
    accept,
    maxFileSize,
    maxFiles,
    validator
  );
  //state for managing the number of valid files
  //state for managing the files locally
  const [localFiles, numberOfValidFiles, setLocalFiles]: [
    ExtFile[],
    number,
    React.Dispatch<React.SetStateAction<ExtFile[]>>
  ] = useDropzoneFileListUpdater(
    dropzoneId,
    value || [],
    isUploading,
    maxFileSize,
    accept,
    maxFiles,
    validator,
    localization,
    validateFilesFlag
  );

  /**
   * Uploads each file in the array of ExtFiles
   * First, sets all the files in preparing status and awaits `preparingTime` miliseconds.
   * If `preparingTime` is not given or its value is false or 0, there won´t be a preparing phase.
   *        This is only for the first file, the rest of files will have preparing time until the file before was uploaded
   *        The first file will jump from undef to "uploading"
   * Then onChange event will be called to update the files outside.
   *
   * If `onCancel` event ocurrs outside on any on the
   * FileItems(e.g. by clicking the cancel button on `FileItem`),
   * the extFileInstance will change its status from 'preparing' to undefined. If so,
   * after the waiting time the value of status will be found as undefined and
   * won´t perfom the upload for that file or any other that fits that condition.
   * Then, for each file sets the file in 'uploading' status.
   * Then onChange event will be called to update the files outside.
   * Then uploads the file with the `xhr` instance.
   * After that, that file recieves the new uploadStatus that can be
   *  'success', 'error' or 'aborted'
   * and onChange event will be called to update the files outside.
   * @param localFiles the list of extFiles to upload
   * @returns nothing
   */
  const uploadfiles = async (localFiles: ExtFile[]): Promise<void> => {
    //set uploading flag to true
    setIsUploading(true);

    //avoid to call upload if not allowed
    // flag is already true or there isnt files
    //url was not provided
    if (isUploading || localFiles.length === 0 || !url) {
      setIsUploading(false);
      return;
    }

    // initialize a new list of ExtFileInstances
    let arrOfExtFilesInstances: ExtFileInstance[] = [];

    const totalNumber: number = localFiles.length;
    console.log("upload start: totalNumber", totalNumber);

    const missingUpload: number = localFiles.filter((extFile: ExtFile) =>
      isUploadAbleExtFile(extFile, validateFilesFlag)
    ).length;

    console.log("upload start: missingUpload", missingUpload);

    let totalRejected: number = 0;
    let currentCountUpload: number = 0;

    const uploadingMessenger: FunctionLabel =
      DropzoneLocalizer.uploadingMessage as FunctionLabel;

    //no missing to upload
    if (!(missingUpload > 0)) {
      console.log("upload start: noFilesMessage", missingUpload);

      setLocalMessage(DropzoneLocalizer.noFilesMessage as string);
      setIsUploading(false);
      return;
    }

    setLocalMessage(uploadingMessenger(`${missingUpload}/${totalNumber}`));
    //  setIsUploading(true);
    //PREPARING stage
    console.log("validateFilesFlag", validateFilesFlag);

    arrOfExtFilesInstances =
      ExtFileManager.setFileListMapPreparing(
        dropzoneId,
        localFiles,
        validateFilesFlag as boolean,
        cleanOnUpload as boolean
      ) || [];

    const newExtFileLocal: ExtFile[] = [...arrOfExtFilesInstances].map((x) =>
      x.toExtFile()
    );

    console.log(
      "FileManagerLog after setFileListMapPreparing",
      arrOfExtFilesInstances
    );

    //CHANGE (o alejo el isUploading o lo alejo para que tenga m,as tiempo antes de la respuyesta)
    // setIsUploading(true);
    handleFilesChange(newExtFileLocal, true);

    console.log("FileManagerLog before sleep", arrOfExtFilesInstances);
    //AWAIT when preparing time is given
    //general sleep for all files
    await sleepPreparing(preparingTime);

    console.log("FileManagerLog after sleep", arrOfExtFilesInstances);

    //return;
    let serverResponses: Array<UploadResponse> = [];

    //Uplad files one by one
    for (let i = 0; i < arrOfExtFilesInstances.length; i++) {
      const currentExtFileInstance: ExtFileInstance = arrOfExtFilesInstances[i];

      console.log(
        "FileManagerLog currentExtFileInstance " + i,
        currentExtFileInstance
      );

      if (
        currentExtFileInstance.uploadStatus === "preparing" &&
        !currentExtFileInstance.extraData?.deleted
      ) {
        //set stage to "uploading" in one file and notify change
        // PREPARING => UPLOADING
        await sleepTransition();

        instantPreparingToUploadOne(currentExtFileInstance);

        //messge in footer
        setLocalMessage(
          uploadingMessenger(`${++currentCountUpload}/${missingUpload}`)
        );

        //CHANGE FILES
        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);

        //UPLOADING => UPLOAD()
        //upload one file and notify about change
        let uploadResponse: UploadResponse;

        if (fakeUpload) {
          uploadResponse = await fakeFuiUpload(
            currentExtFileInstance,
            DropzoneLocalizer
          );
          let fakeProgress = 0;
          while (fakeProgress < 100) {
            fakeProgress += getRandomInt(21, 35);
            currentExtFileInstance.progress =
              fakeProgress > 100 ? 100 : fakeProgress;
            await sleepTransition(1000);
            handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
          }
        } else {
          try {
            uploadResponse = await uploadExtFile(
              currentExtFileInstance,
              url,
              method,
              headers,
              uploadLabel
            );
          } catch (error) {
            uploadResponse = unexpectedErrorUploadResult(
              currentExtFileInstance.toExtFile()
            );
          }
        }

        const { uploadedFile } = uploadResponse;
        console.log("fake uploadResponse uploadedFile", uploadedFile);

        //update instances
        currentExtFileInstance.uploadStatus = uploadedFile.uploadStatus;
        currentExtFileInstance.uploadMessage = uploadedFile.uploadMessage;

        console.log(
          "fake uploadResponse currentExtFileInstance",
          currentExtFileInstance
        );
        console.log(
          "fake uploadResponse currentExtFileInstance",
          currentExtFileInstance.uploadStatus
        );
        console.log(
          "fake uploadResponse currentExtFileInstance",
          currentExtFileInstance.uploadMessage
        );

        console.log(
          "pre sanitizeArrExtFile",
          arrOfExtFilesInstances.map((F) => {return{status:F.uploadStatus,message:F.uploadMessage}})
        );


        //CHANGE
        if (!(currentExtFileInstance.uploadStatus === "aborted"))
          await sleepTransition();

        console.log(
          "pre sanitizeArrExtFile",
          arrOfExtFilesInstances.map((F) => {return{status:F.uploadStatus,message:F.uploadMessage}})
        );
        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);

        if (uploadedFile.uploadStatus === "error") {
          totalRejected++;
        }

        serverResponses.push(uploadResponse);
      } else {
        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
      }
    }

    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);

    // upload group finished :D
    onUploadFinish?.(serverResponses);

    const finishUploadMessenger: FunctionLabel =
      DropzoneLocalizer.uploadFinished as FunctionLabel;
    setLocalMessage(
      finishUploadMessenger(missingUpload - totalRejected, totalRejected)
    );
    setIsUploading(false);
  };

  const handleAbortUpload = () => {
    const listExtFileLocal: ExtFileInstance[] | undefined =
      ExtFileManager.getExtFileInstanceList(dropzoneId);
    console.log("Aborting", listExtFileLocal, dropzoneId);

    if (!listExtFileLocal) return;
    listExtFileLocal.forEach((extFileInstance: ExtFileInstance) => {
      if (
        extFileInstance.uploadStatus === "uploading" ||
        extFileInstance.uploadStatus === "preparing"
      ) {
        if (extFileInstance.xhr !== null && extFileInstance.xhr !== undefined)
          extFileInstance.xhr.abort();
        extFileInstance.uploadStatus = "aborted";
        extFileInstance.uploadMessage = "Upload was aborted by user";
      }
    });
  };

  //the final className
  const dropzoneClassName: string | undefined = useDropzoneClassName(
    className,
    isDragging,
    header,
    footer,
    color,
    backgroundColor,
    minHeight
  );

  const dropLayerClassName: string = useDropLayerClassName(
    color as string,
    isDragging,
    !onDragEnter && !onDragLeave
  );

  React.useEffect(() => {
    const localValidator: FileValidatorProps = { maxFileSize, accept };

    const validatedFuiFileList: ExtFile[] = validateExtFileList(
      localFiles,
      maxFiles ? maxFiles - numberOfValidFiles : Infinity,
      localValidator,
      validator,
      maxFiles,
      localization
    );

    setLocalFiles(validatedFuiFileList);
    // eslint-disable-next-line
  }, [maxFileSize, accept, maxFiles, localization]);

  /**
   * Performs the changes in the extFile list.
   * Makes a new array of extFile according to the "behaviour" prop.
   * If isUploading state is not true and the behaviour props is equal to "add",
   * the incoming extFileList is added at the end of the current list of extFile.
   * Otherwise, the complete extFile list is replaced by the incomming extFile list
   * @param extFileList the new fileList
   * @param isUploading a flag that dscribes whther the uploading process is active or not
   */
  const handleFilesChange = (
    extFileList: ExtFile[],
    isUploading?: boolean
  ): void => {
    console.log(
      "handleFilesChange",
      extFileList.map((F) => F.uploadMessage)
    );
    let finalExtFileList: ExtFile[] =
      behaviour === "add" && !isUploading
        ? [...localFiles, ...extFileList]
        : [...extFileList];
    if (onChange) {
      onChange(finalExtFileList);
    } else {
      setLocalFiles(finalExtFileList);
    }
    if (autoUpload && !isUploading) {
      console.log("autoUpload", finalExtFileList);
      uploadfiles(finalExtFileList);
    }
  };

  /**
   * Performs the action of recieving the files when user selects the files
   * by clicking the InputButton
   * @param evt event handler for getting files from input element target
   */
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    //if (isUploading) return;
    let fileList: FileList = evt.target.files as FileList;
    let extFileListOutput: ExtFile[] = fileListToExtFileArray(fileList);
    //validate dui files
    if (validateFilesFlag) {
      extFileListOutput = outerFuiValidation(extFileListOutput);
      if (autoClean) {
        extFileListOutput = extFileListOutput.filter((f) => f.valid);
      }
    }
    //init xhr on each dui file
    if (url) extFileListOutput = toUploadableExtFileList(extFileListOutput);

    // Clean input element to trigger onChange event on input
    cleanInput(inputRef.current);

    handleFilesChange(extFileListOutput);
  };

  /**
   * Performs the validation process for each FuiFile
   * outside the DropzoneNeo component file declaration
   * according to the criteria given by maxFiles and maxFileSize and accept props
   * This function calls validateFuiFileList and sets the valid prop of FuiFile to "true" or "false"
   * depending on the result of the individual validation.
   * It also add the list of errors.
   * @param fuiFileListToValidate the fuiFileList to validate
   * @returns a list of validated FuiFile list
   */
  const outerFuiValidation = (fuiFileListToValidate: ExtFile[]): ExtFile[] => {
    const localValidator: FileValidatorProps = { maxFileSize, accept };
    console.log("validatedFuiFileList pre", fuiFileListToValidate);

    let finalNumberOfValids: number = numberOfValidFiles;
    if (behaviour === "replace") {
      //re-start number of valids
      finalNumberOfValids = 0;
    }

    const validatedFuiFileList: ExtFile[] = validateExtFileList(
      fuiFileListToValidate,
      maxFiles ? maxFiles - finalNumberOfValids : Infinity,
      localValidator,
      validator,
      maxFiles,
      localization
    );
    console.log("validatedFuiFileList aft", validatedFuiFileList);
    return validatedFuiFileList;
  };

  // HANDLERS for CLICK, DRAG NAD DROP
  function handleClick(): void {
    //handleClickUtil(evt);
    if (!clickable) return;
    makeRipple();
    handleClickInput(inputRef.current);
  }
  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>
  ) => {
    handleDragUtil(evt);
    setIsDragging(true);
    //console.log("handleDragEnter");
  };
  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>
  ) => {
    handleDragUtil(evt);
    setIsDragging(false);
  };
  // RIPPLE
  /**
   * Creates a ripple in the middle of the main container
   */
  const makeRipple = (): void => {
    createFuiRippleFromDiv(
      fuiRippleRefAbs.current,
      fuiRippleRefRel.current,
      color as string
    );
  };

  // KAMUI => RECIEVE FILES FROM DROP OR INPUT( CLICK ), VALIDATE AND CHANGE

  /**
   * Performs the action of recieving the files when user drops the files
   * in the Dropzone container.
   * According to the given config from props, this function could
   * validate files and also start the uploading phase
   * @param evt even handler for getting files from dataTransfer
   */
  const kamui: React.DragEventHandler<HTMLDivElement> = async (
    evt: React.DragEvent<HTMLDivElement>
  ): Promise<void> => {
    handleDropUtil(evt);
    if (!disableRipple) makeRipple();
    setIsDragging(false);

    if (isUploading) return;

    let fileList: FileList = evt.dataTransfer.files;

    let extFileListOutput: ExtFile[] = fileListToExtFileArray(fileList);

    //validate extended files
    if (validateFilesFlag) {
      extFileListOutput = outerFuiValidation(extFileListOutput);
      if (autoClean) {
        extFileListOutput = extFileListOutput.filter((f) => f.valid);
      }
    }

    //init xhr on each dui file
    if (url) extFileListOutput = toUploadableExtFileList(extFileListOutput);

    handleFilesChange(extFileListOutput);
  };

  /************* HEADER & FOOTER ******** */
  /**
   * reset the complete file list
   */
  const handleReset = (): void => {
    if (onChange) {
      onChange([]);
    } else {
      setLocalFiles([]);
    }
  };
  const handleClean = (): void => {
    if (onClean) {
      onClean();
    } else if (onChange) {
      onChange(localFiles.filter((f) => f.valid));
    } else {
      setLocalFiles(localFiles.filter((f) => f.valid));
    }
  };

  const DropzoneActionButtons = ({ visible = true }) => {
    if (!visible) return <></>;
    else
      return (
        <DropzoneButtons
          abortButton={isUploading ? abortButton : undefined}
          onAbort={handleAbortUpload}
          deleteButton={deleteButton}
          onDelete={!isUploading ? handleReset : undefined}
          uploadButton={!isUploading && !autoUpload ? uploadButton : undefined}
          onUpload={!autoUpload ? () => uploadfiles(localFiles) : undefined}
          cleanButton={
            validateFilesFlag && !isUploading && !autoClean
              ? cleanButton
              : undefined
          }
          onClean={handleClean}
          style={containerStyle}
          className={containerClassName}
        />
      );
  };
  if (!dropzoneClassName) return <></>;
  return (
    <React.Fragment>
      {actionButtonsPosition === "top" && (
        <DropzoneButtons
          abortButton={isUploading ? abortButton : undefined}
          onAbort={handleAbortUpload}
          deleteButton={deleteButton}
          onDelete={!isUploading ? handleReset : undefined}
          uploadButton={!isUploading && !autoUpload ? uploadButton : undefined}
          onUpload={!autoUpload ? () => uploadfiles(localFiles) : undefined}
          cleanButton={
            validateFilesFlag && !isUploading && !autoClean
              ? cleanButton
              : undefined
          }
          onClean={handleClean}
          style={containerStyle}
          className={containerClassName}
        />
      )}
      <div
        style={style}
        className={dropzoneClassName}
        {...rest}
        onClick={handleClick}
        onDragOver={handleDragEnter}
        onDragLeave={!dropOnLayer ? handleDragLeave : undefined}
        onDrop={!dropOnLayer ? kamui : undefined}
      >
        {!disableRipple && (
          <div
            ref={fuiRippleRefAbs}
            className="dropzone-ui-base-ripple-absolute"
          >
            <div
              ref={fuiRippleRefRel}
              className="dropzone-ui-base-ripple-relative"
            ></div>
          </div>
        )}

        {header && (
          <DropzoneHeader
            onReset={!isUploading ? handleReset : undefined}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            localization={localization}
            urlPresent={url !== undefined}
            onUploadStart={
              !autoUpload && !uploadButton
                ? () => uploadfiles(localFiles)
                : undefined
            }
            numberOfValidFiles={numberOfValidFiles}
            //onClean={autoClean ? undefined : cleanButton ? undefined : onClean}
            onClean={
              isUploading || cleanButton || autoClean
                ? undefined
                : (cleanFiles || onClean) && validateFilesFlag
                ? handleClean
                : undefined
            }
          />
        )}

        <DropzoneChildren label={label} localization={localization}>
          {children}
        </DropzoneChildren>

        {footer && (
          <DropzoneFooter
            accept={accept}
            message={isUploading ? localMessage : undefined}
            localization={localization}
          />
        )}

        {dropOnLayer && (
          <DropLayer
            open={isDragging}
            className={dropLayerClassName}
            onDragLeave={handleDragLeave}
            onDrop={kamui}
          />
        )}

        <InputHidden
          multiple={maxFiles ? maxFiles > 1 : true}
          accept={accept || ""}
          inputRef={inputRef}
          onChange={handleChangeInput}
        />

        <DropzoneDisabledLayer open={disabled} />
      </div>

      {actionButtonsPosition === "bottom" && (
        <DropzoneButtons
          abortButton={isUploading ? abortButton : undefined}
          onAbort={handleAbortUpload}
          deleteButton={deleteButton}
          onDelete={!isUploading ? handleReset : undefined}
          uploadButton={!isUploading && !autoUpload ? uploadButton : undefined}
          onUpload={!autoUpload ? () => uploadfiles(localFiles) : undefined}
          cleanButton={
            validateFilesFlag && !isUploading && !autoClean
              ? cleanButton
              : undefined
          }
          onClean={handleClean}
          style={containerStyle}
          className={containerClassName}
        />
      )}
    </React.Fragment>
  );
};
export default Dropzone;

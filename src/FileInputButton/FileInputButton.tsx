import * as React from "react";
import {
  Localization,
  UploadConfig,
  LocalLabels,
  DropzoneLocalizerSelector,
  isValidateActive,
  ExtFile,
  ExtFileInstance,
  isUploadAbleExtFile,
  ExtFileManager,
  sleepPreparing,
  sleepTransition,
  instantPreparingToUploadOne,
  sanitizeArrExtFile,
  fakeFuiUpload,
  getRandomInt,
  uploadExtFile,
  unexpectedErrorUploadResult,
  FileValidatorProps,
  validateExtFileList,
  fileListToExtFileArray,
  toUploadableExtFileList,
  cleanInput,
  FileIdGenerator,
} from "@files-ui/core";
import { DropzoneActions } from "../Dropzone/components/dropzone/DropzoneProps";
import DropzoneButtons from "../Dropzone/components/DropzoneButtons/DropzoneButtons";
import { FilesUiContext } from "../FilesUiProvider/FilesUiContext";
import { useDropzoneFileListUpdater } from "../hooks";
import InputHidden from "../InputHidden/InputHidden";
import { MaterialButton } from "../MaterialButton";

import { mergeProps } from "../overridable";
import { handleClickInput } from "../utils";
import {
  defaultFileInputButtonProps,
  FileInputButtonProps,
} from "./InputButtonProps";
import { isThereValidUrl } from "../utils/url.utils";

const FileInputButton: React.FC<FileInputButtonProps> = (
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
    //cleanFiles,
    //onClean,
    autoClean,
    //uploading
    uploadConfig,
    fakeUpload,
    onUploadStart,
    onUploadFinish,
    //styling
    //background,
    //minHeight,
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
    //action butotns
    actionButtons,
    //drop layer
    // dropOnLayer,
    //header and footer
    //header,
    //footer,
    //headerConfig = {},
    //footerConfig = {},
    //disabled
    disabled,
    //clickable,
    //add or replace
    behaviour,
    //content
    children,
    //advancedConfig,

    variant,
    resetStyles,
    darkMode: darkModeProp,
    ...rest
  } = mergeProps(props, defaultFileInputButtonProps);
  //context
  const {
    darkMode: darkModeContext,
    //icons,
    localization: locContext,
  } = React.useContext(FilesUiContext);
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
    preparingTime = 1500,
    autoUpload = false,
    urlFromExtFile,
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

  //localizers
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //ref to the hidden input tag
  const inputRef = React.useRef<HTMLInputElement>(null);

  //state for checking upload start
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  //Id for uploding through FuiFileManager
  //const inputButtonId: string | number = React.useId();
  const inputButtonId: string = React.useMemo(
    () => FileIdGenerator.getNextId() + "",
    []
  );
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
    inputButtonId,
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
   * Flag that determines if component should perform upload given url
   */
  const shouldUpload: boolean = isThereValidUrl(
    url,
    urlFromExtFile,
    localFiles
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

    if (isUploading || localFiles.length === 0 || !shouldUpload) {
      setIsUploading(false);
      return;
    }
    if (localFiles.length === 0) {
      setIsUploading(false);
      return;
    }
    // initialize a new list of ExtFileInstances
    let arrOfExtFilesInstances: ExtFileInstance[] = [];

    //const totalNumber: number = localFiles.length;
    //console.log("upload start: totalNumber", totalNumber);

    const missingUpload: number = localFiles.filter((extFile: ExtFile) =>
      isUploadAbleExtFile(extFile, validateFilesFlag)
    ).length;

    //console.log("upload start: missingUpload", missingUpload);

    //no missing to upload
    if (!(missingUpload > 0)) {
      //console.log("upload start: noFilesMessage", missingUpload);

      setIsUploading(false);

      return;
    }

    //  setIsUploading(true);
    //PREPARING stage
    //console.log("validateFilesFlag", validateFilesFlag);
    onUploadStart?.(localFiles);

    arrOfExtFilesInstances =
      ExtFileManager.setFileListMapPreparing(
        inputButtonId,
        localFiles,
        validateFilesFlag as boolean,
        cleanOnUpload as boolean
      ) || [];

    const newExtFileLocal: ExtFile[] = [...arrOfExtFilesInstances].map((x) =>
      x.toExtFile()
    );

    //CHANGE (o alejo el isUploading o lo alejo para que tenga m,as tiempo antes de la respuyesta)
    // setIsUploading(true);
    handleFilesChange(newExtFileLocal, true);

    //console.log("FileManagerLog before sleep", arrOfExtFilesInstances);
    //AWAIT when preparing time is given
    //general sleep for all files
    await sleepPreparing(preparingTime);

    //console.log("FileManagerLog after sleep", arrOfExtFilesInstances);

    //return;
    let serverResponses: Array<ExtFile> = [];
    //Uplad files one by one
    for (let i = 0; i < arrOfExtFilesInstances.length; i++) {
      const currentExtFileInstance: ExtFileInstance = arrOfExtFilesInstances[i];

      if (
        currentExtFileInstance.uploadStatus === "preparing" &&
        !currentExtFileInstance.extraData?.deleted
      ) {
        //set stage to "uploading" in one file and notify change
        // PREPARING => UPLOADING
        await sleepTransition();

        instantPreparingToUploadOne(currentExtFileInstance);

        //CHANGE FILES
        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);

        //UPLOADING => UPLOAD()
        //upload one file and notify about change
        let uploadResponse: ExtFile;

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
              urlFromExtFile,
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

        const uploadedFile = uploadResponse;
        //console.log("fake uploadResponse uploadedFile", uploadedFile);

        //update instances
        currentExtFileInstance.uploadStatus = uploadedFile.uploadStatus;
        currentExtFileInstance.uploadMessage = uploadedFile.uploadMessage;

        //CHANGE
        if (!(currentExtFileInstance.uploadStatus === "aborted"))
          await sleepTransition();

        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);

        serverResponses.push(uploadResponse);
      } else {
        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
      }
    }

    setLocalFiles(sanitizeArrExtFile(arrOfExtFilesInstances));

    // upload group finished :D
    onUploadFinish?.(serverResponses);

    setIsUploading(false);
  };

  const handleAbortUpload = () => {
    const listExtFileLocal: ExtFileInstance[] | undefined =
      ExtFileManager.getExtFileInstanceList(inputButtonId);
    //console.log("Aborting", listExtFileLocal, inputButtonId);

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
      //console.log("autoUpload", finalExtFileList);
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
    //init xhr on each ext file
    if (shouldUpload)
      extFileListOutput = toUploadableExtFileList(extFileListOutput);

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
    //console.log("validatedFuiFileList pre", fuiFileListToValidate);

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
    //console.log("validatedFuiFileList aft", validatedFuiFileList);
    return validatedFuiFileList;
  };

  // HANDLERS for CLICK
  function handleClick(): void {
    ////console.log("HAAAAAAAA");
    //handleClickUtil(evt);
    if (disabled) return;

    handleClickInput(inputRef.current);
  }

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
    if (onChange) {
      onChange(localFiles.filter((f) => f.valid));
    } else {
      setLocalFiles(localFiles.filter((f) => f.valid));
    }
  };

  return (
    <React.Fragment>
      {actionButtonsPosition === "before" && (
        <DropzoneButtons
          disabled={disabled}
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
        id={inputButtonId}
        {...rest}
      >
        {children || label}
      </MaterialButton>
      <InputHidden
        multiple={maxFiles ? maxFiles > 1 : true}
        accept={accept || ""}
        inputRef={inputRef}
        onChange={handleChangeInput}
      />

      {actionButtonsPosition === "after" && (
        <DropzoneButtons
          disabled={disabled}
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
          top={false}
        />
      )}
    </React.Fragment>
  );
};
export default FileInputButton;

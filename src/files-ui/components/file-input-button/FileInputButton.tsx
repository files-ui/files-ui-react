import * as React from "react";
import { print_manager } from "../../../utils";
import {
  cleanInput,
  DropzoneLocalizerSelector,
  ExtFile,
  ExtFileInstance,
  ExtFileManager,
  fakeFuiUpload,
  fileListToExtFileArray,
  FileValidatorProps,
  getRandomInt,
  //FunctionLabel,
  handleClickInput,
  instantPreparingToUploadOne,
  isUploadAbleExtFile,
  isValidateActive,
  LocalLabels,
  sanitizeArrExtFile,
  sleepPreparing,
  sleepTransition,
  toUploadableExtFileList,
  unexpectedErrorUploadResult,
  UploadConfig,
  uploadExtFile,
  UploadResponse,
  validateExtFileList,
} from "../../core";
import useDropzoneFileListUpdater from "../../hooks/useDropzoneFileUpdater";
import InputHidden from "../input-hidden/InputHidden";
import { MaterialButton } from "../material-button";
import { mergeProps } from "../overridable";
import {
  defaultFileInputButtonProps,
  FileInputButtonProps,
} from "./InputButtonProps";

const FileInputButton: React.FC<FileInputButtonProps> = (
  props: FileInputButtonProps
) => {
  const {
    accept,
    maxFileSize,
    maxFiles,
    validator,
    uploadConfig,
    onChange,
    behaviour,
    value = [],
    localization,
    disabled,
    onUploadFinish,
    fakeUpload,
    label,
    children,
    style,
    className,
    color,
    variant,
    textDecoration,
    resetStyles,
  } = mergeProps(props, defaultFileInputButtonProps);
  const {
    url,
    method,
    headers,
    uploadLabel,
    cleanOnUpload = true,
    preparingTime = 1500,
    autoUpload = false,
  } = uploadConfig as UploadConfig;

  //localizers
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  //ref to the hidden input tag
  const inputRef = React.useRef<HTMLInputElement>(null);

  //const dropzoneId: string | number = useDropzoneFileListID();
  const inputButtonId: string | number = React.useId();
  //state for checking upload start
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  //Flag that determines whether to validate or not
  const validateFilesFlag: boolean = isValidateActive(
    accept,
    maxFileSize,
    maxFiles,
    validator
  );

  //state for managing the number of valid files
  //state for managing the files locally
  console.table({
    inputButtonId,
    value,
    isUploading,
    maxFileSize,
    accept,
    maxFiles,
    validator,
    localization,
    validateFilesFlag,
  });
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
   * Uploads each file in the array of ExtFiles
   * First, sets all the files in preparing status and awaits `preparingTime` miliseconds.
   * If `preparingTime` is not given or its value is false or 0, there won´t be a preparing phase.
   * Then onChange event will be called to update the files outside.
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

    /* const uploadingMessenger: FunctionLabel =
      DropzoneLocalizer.uploadingMessage as FunctionLabel; */

    //no missing to upload
    if (!(missingUpload > 0)) {
      console.log("upload start: noFilesMessage", missingUpload);

      //setLocalMessage(DropzoneLocalizer.noFilesMessage as string);
      setIsUploading(false);
      return;
    }

    //setLocalMessage(uploadingMessenger(`${missingUpload}/${totalNumber}`));
    //  setIsUploading(true);
    //PREPARING stage
    console.log("validateFilesFlag", validateFilesFlag);

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
    let serverResponses: Array<ExtFile> = [];

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
        /* setLocalMessage(
        uploadingMessenger(`${++currentCountUpload}/${missingUpload}`)
      ); */

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
          arrOfExtFilesInstances.map((F) => {
            return { status: F.uploadStatus, message: F.uploadMessage };
          })
        );

        //CHANGE
        if (!(currentExtFileInstance.uploadStatus === "aborted"))
          await sleepTransition();

        console.log(
          "pre sanitizeArrExtFile",
          arrOfExtFilesInstances.map((F) => {
            return { status: F.uploadStatus, message: F.uploadMessage };
          })
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
    /* 
    const finishUploadMessenger: FunctionLabel =
      DropzoneLocalizer.uploadFinished as FunctionLabel;
    setLocalMessage(
      finishUploadMessenger(missingUpload - totalRejected, totalRejected)
    ); */
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };
  /**
   * Performs the changes in the FuiFile list.
   * Makes a new array of FuiFiles according to the "behaviour" prop.
   * If isUploading state is not true and the behaviour props is equal to "add",
   * the incoming extFileList is added at the end of the current list of fuiFiles.
   * Otherwise, the complete fuiFile list replaced by the incomming fuiFileList
   * @param extFileList the new fileList
   * @param isUploading a flag that dscribes whther the uploading process is active or not
   */
  const handleFilesChange = (
    extFileList: ExtFile[],
    isUploading?: boolean
  ): void => {
    console.log(
      "handleFilesChange",
      extFileList.map((F) => F.uploadStatus)
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
    if (validateFilesFlag)
      extFileListOutput = outerFuiValidation(extFileListOutput);
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
    const validatedFuiFileList: ExtFile[] = validateExtFileList(
      fuiFileListToValidate,
      maxFiles ? maxFiles - numberOfValidFiles : Infinity,
      localValidator,
      validator,
      maxFiles,
      localization
    );
    return validatedFuiFileList;
  };
  // HANDLERS for CLICK
  function handleClick(): void {
    console.log("HAAAAAAAA");
    //handleClickUtil(evt);
    if (disabled) return;

    handleClickInput(inputRef.current);
  }

  return (
    <>
      <MaterialButton
        className={className}
        style={style}
        color={color}
        variant={variant}
        textDecoration={textDecoration}
        resetStyles={resetStyles}
        onClick={handleClick}
      >
        {children || label}
      </MaterialButton>
      <InputHidden
        multiple={maxFiles ? maxFiles > 1 : true}
        accept={accept || ""}
        inputRef={inputRef}
        onChange={handleChangeInput}
      />
    </>
  );
};
export default FileInputButton;

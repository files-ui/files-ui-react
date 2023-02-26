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
  FunctionLabel,
  handleClickInput,
  instantPreparingToUploadOne,
  isValidateActive,
  LocalLabels,
  sleepPreparing,
  sleepTransition,
  toUploadableExtFileList,
  UploadConfig,
  uploadOnePromiseXHR,
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
    value,
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
    if (!url) return;

    setIsUploading(true);
    print_manager(localFiles, "start");
    // set flag to true
    // recieve on the new list
    // initialize new list of ExtFileInstances
    let arrOfExtFilesInstances: ExtFileInstance[] = [];
    //avoid to call upload if not allowed
    if (isUploading || localFiles.length === 0 || !arrOfExtFilesInstances) {
      return;
    }

    const totalNumber: number = localFiles.length;
    const missingUpload: number = localFiles.filter((x: ExtFile) => {
      return (
        (!validateFilesFlag || (validateFilesFlag && x.valid)) &&
        x.uploadStatus !== "success"
      );
    }).length;

    let totalRejected: number = 0;
    let currentCountUpload: number = 0;

    //  setIsUploading(true);
    //PREPARING stage
    //use methods to update on static class
    //obtain a fresher dui file list
    console.log("***** before setFileListMapPreparing");
    console.table(localFiles);
    arrOfExtFilesInstances =
      ExtFileManager.setFileListMapPreparing(
        inputButtonId,
        localFiles,
        validateFilesFlag as boolean,
        cleanOnUpload as boolean
      ) || [];

    console.log("***** FileManagerLog  setFileListMapPreparing");
    console.table(arrOfExtFilesInstances);
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
    // workaround for preventing getting the uploadStatus as undefined
    /*  arrOfExtFilesInstances.forEach((F) => {
    F.uploadStatus = "preparing";
  }); */
    //variable for storing responses
    //console.log("uploadfiles after sleep response",response);
    console.log("FileManagerLog after sleep", arrOfExtFilesInstances);

    //return;
    let serverResponses: Array<UploadResponse> = [];

    for (let i = 0; i < arrOfExtFilesInstances.length; i++) {
      const currentExtFileInstance: ExtFileInstance = arrOfExtFilesInstances[i];
      console.log(
        "FileManagerLog currentExtFileInstance " + i,
        currentExtFileInstance
      );

      if (currentExtFileInstance.uploadStatus === "preparing") {
        //set stage to "uploading" in one file and notify change
        // PREPARING => UPLOADING
        instantPreparingToUploadOne(currentExtFileInstance);
        /*   setLocalMessage(
          uploadingMessenger(`${++currentCountUpload}/${missingUpload}`)
        ); */
        //CHANGE
        handleFilesChange([...arrOfExtFilesInstances], true);

        //UPLOADING => UPLOAD()
        //upload one file and notify about change
        const uploadResponse: UploadResponse = fakeUpload
          ? await fakeFuiUpload(currentExtFileInstance, DropzoneLocalizer)
          : await uploadOnePromiseXHR(
              currentExtFileInstance,
              url,
              method,
              headers,
              uploadLabel
            );

        const { uploadedFile } = uploadResponse;
        //update instances
        currentExtFileInstance.uploadStatus = uploadedFile.uploadStatus;
        currentExtFileInstance.uploadMessage = uploadedFile.uploadMessage;
        //CHANGE
        if (!(currentExtFileInstance.uploadStatus === "aborted"))
          await sleepTransition();

        handleFilesChange(
          arrOfExtFilesInstances.map((x: ExtFileInstance) => x.toExtFile()),
          true
        );

        if (uploadedFile.uploadStatus === "error") {
          totalRejected++;
        }

        serverResponses.push(uploadResponse);
      }
    }

    // upload group finished :D
    onUploadFinish?.(serverResponses);

    const finishUploadMessenger: FunctionLabel =
      DropzoneLocalizer.uploadFinished as FunctionLabel;

    /*  setLocalMessage(
      finishUploadMessenger(missingUpload - totalRejected, totalRejected)
    ); */
    setIsUploading(false);
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

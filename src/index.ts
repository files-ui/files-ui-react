export { default as Dropzone } from "./Dropzone/components/dropzone/Dropzone";
export * from "./Dropzone/components/dropzone/Dropzone";

export { default as FileInputButton } from "./FileInputButton/FileInputButton";
export * from "./FileInputButton/FileInputButton";

export { default as Avatar } from "./Avatar/Avatar";
export * from "./Avatar/Avatar";

export { default as FileCard } from "./FileCard/FileCard";
export * from "./FileCard/FileCard";

export { default as FileMosaic } from "./FileMosaic/components/file-mosaic/FileMosaic";
export * from "./FileMosaic/components/file-mosaic/FileMosaic";

export { default as FullScreen } from "./FullScreen/FullScreen";
export * from "./FullScreen/FullScreen";

export { default as ImagePreview } from "./ImagePreview/ImagePreview";
export * from "./ImagePreview/ImagePreview";

export { default as VideoPreview } from "./VideoPreview/VideoPreview";
export * from "./VideoPreview/VideoPreview";

export { default as MaterialButton } from "./MaterialButton/MaterialButton";
export * from "./MaterialButton/MaterialButton";

export type { FileMosaicProps } from "./FileMosaic/components/file-mosaic/FileMosaicProps";

export type { DropzoneProps } from "./Dropzone/components/dropzone/DropzoneProps";

export type { FileInputButtonProps } from "./FileInputButton/InputButtonProps";

export type { FileCardProps } from "./FileCard/FileCardProps";

export type { AvatarProps } from "./Avatar/AvatarProps";

export { useFakeProgress } from "./hooks";

export {
    createListOfMultiTypeFile,
    uploadFile,
    uploadFormData,
    uploadExtFile,
    ExtFileInstance,
    createUploadConfig,
    ABORTED_ERROR_RESPONSE,
    DropzoneEnglish,
    DropzoneFrench,
    DropzoneItalian, DropzoneLocalizer, DropzoneLocalizerSelector,
    DropzonePortuguese, DropzoneRussian, DropzoneSimplifiedChinese,
    DropzoneSpanish, DropzoneTraditionalChinese, FileIdGenerator,
    FileItemEnglish, FileItemFrench, FileItemItalian, FileItemLocalizer,
    FileItemLocalizerSelector, FileItemPortuguese, FileItemRussian,
    FileItemSimplifiedChinese, FileItemSpanish,
    FileItemTraditionalChinese,
    JSON_PARSE_ERROR_RESPONSE,
    JsonParseResponse,
    NAMED_COLORS,
    NO_XHR_PROVIDED_ERROR,
    SyntheticFile,
    TIMEOUT_ERROR_RESPONSE,
    UNEXPECTED_ERROR_RESPONSE,
    ValidateErrorEnglish,
    ValidateErrorFrench,
    ValidateErrorItalian,
    ValidateErrorLocalizer,
    ValidateErrorLocalizerSelector,
    ValidateErrorPortuguese,
    ValidateErrorRussian,
    ValidateErrorSimplifiedChinese,
    ValidateErrorSpanish,
    ValidateErrorTraditionalChinese, aac, abw, accdb,
    addClassName,
    addExtraData,
    addHeaders,
    asureColor,
    createSyntheticFile,
    makeSyntheticExtFile,
    validateFile, 
    validateExtFileList, 
    validateAccept,
    validateExtFile,
    isValidateActive, 
    uploadOne, 
    uploadOneExtFile, 
    isUploadAbleExtFile,
    toUploadableExtFileList,
    cleanInput,
    colourNameToHex,
    completeAsureColor,
    completeUploadResult,
    darkerColor,
    extFileMock,
    extFileReconcilation,
    fakeFuiUpload,
    fileListToExtFileArray,
    fileListToExtFileInstanceArray,
    fileListvalidator,
    fileSizeFormater,
    getExt,
    getImageOrientation,
    getLocalFileItemData,
    getRandomInt,
    getURLFileIco,
    getURLFileIcoFromNameAndType,
    hexColorToRGB,
    hexTodec,
    instantPreparingToUploadOne,
    isHexColor,
    makeErrorUploadResponse,
    makeServerResponse,
    makeSuccessUploadResponse,
    prepToUploadOne,
    preparingToUploadOne,
    readAsArrayBuffer, 
    readAsBinaryString,
    readAsDataURL,
    readAsText,
    resizeImage,
    sanitizeArrExtFile,
    separateAccept,
    setNextUploadStatus,
    setPrepToUploading,
    shrinkWord,
    sleepPreparing,
    sleepTransition,
    unableToUploadResult,
    unexpectedErrorUploadResult,
} from "@files-ui/core";

export type {
    ExtFile,
    ExtFileListMap,
    UPLOADSTATUS,
    Localization,
    ServerResponse,
    UploadResponse,
    UploadConfig,
    ValidateFileResponse,
    IconsMap,
    Behaviour,
    ComponentLocalizer,
    FileValidatorProps,
    FunctionLabel,
    LocalLabels,
    Method,
    NamedColor,
    UploadPromiseResponse
} from "@files-ui/core"


export { default as FilesUiProvider } from "./FilesUiProvider/FilesUiProvider";
export * from "./FilesUiProvider/FilesUiProvider";


export type { IconsSet, FilesUIConfig } from "./FilesUiProvider";

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
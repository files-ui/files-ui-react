export {
    DropzoneEnglish,
    DropzoneFrench,
    DropzoneItalian,
    DropzoneLocalizer,
    DropzoneLocalizerSelector,
    DropzonePortuguese,
    DropzoneRussian,
    DropzoneSimplifiedChinese,
    DropzoneSpanish,
    DropzoneTraditionalChinese,
    FileItemEnglish,
    FileItemFrench,
    FileItemItalian,
    FileItemLocalizer,
    FileItemLocalizerSelector,
    FileItemPortuguese,
    FileItemRussian,
    FileItemSimplifiedChinese,
    FileItemSpanish,
    FileItemTraditionalChinese,
    ValidateErrorEnglish,
    ValidateErrorFrench,
    ValidateErrorItalian,
    ValidateErrorLocalizer,
    ValidateErrorLocalizerSelector,
    ValidateErrorPortuguese,
    ValidateErrorRussian,
    ValidateErrorSimplifiedChinese,
    ValidateErrorSpanish,
    ValidateErrorTraditionalChinese
} from "./localization";

export {
    readAsArrayBuffer,
    readAsBinaryString,
    readAsDataURL,
    readAsText,
    resizeImage,
    getImageOrientation
} from "./reader";

export {
    aac, abw, accdb, avi, azw,
    bmp, bz, bz2, cda,
    csh, css, csv,
    docx, drawio,
    eot, epub,
    freearc, gif, gzip,
    html, icalendar,
    jar, java, javascript, jpeg, json, jsonld,
    midi, mp3, mp4, mpeg, mpkg,
    octet, odp, ods, odt, oga, ogv, ogx, opus, otf,
    pdf, php, png, pptx, psd, python,
    rar, react, rtf,
    sass, sevenzip, sh, swf,
    tar, text, tiff, ttf, typescript,
    vsd, vue,
    wav, weba, webm, webp, wma, wmv, woff,
    xlsx, xml, xul,
    zip,
    applicationSelector,
    audioSelector,
    checkIsCode,
    extensionSelector,
    fontSelector,
    getURLFileIco,
    imageSelector,
    mimeSelector,
    textSelector,
    videoSelector,
} from "./mime";

export type {
    ExtFile,
    Behaviour,
    CustomValidateFileResponse,
    ComponentLocalizer,
    ExtFileListMap,
    FileValidatorProps,
    FunctionLabel,
    LocalLabels,
    Localization,
    Method,
    NamedColor,
    ServerResponse,
    UploadPromiseResponse,
    UploadResponse,
    UploadConfig,
    UPLOADSTATUS
} from "./types";

export {
    //UPLOADSTATUS,
    ExtFileInstance, ExtFileManager, extFileMock
} from "./types"

export {
    uploadExtFile,
    FuiUpload,
    completeUploadResult,
    instantPreparingToUploadOne,
    preparingToUploadOne,
    sleepTransition,
    toUploadableExtFileList,
    unableToUploadResult,
    uploadOnePromiseXHR,
    makeServerResponse,
    uploadFile,
    uploadFormData,
    ABORTED_ERROR_RESPONSE,
    JSON_PARSE_ERROR_RESPONSE,
    JsonParseResponse,
    NO_XHR_PROVIDED_ERROR,
    TIMEOUT_ERROR_RESPONSE,
    UNEXPECTED_ERROR_RESPONSE,
    makeErrorUploadResponse,
    makeSuccessUploadResponse,
    addExtraData,
    addHeaders
} from "./upload";

export {
    FileIdGenerator,
    fileListToExtFileArray,
    fileListToExtFileInstanceArray,
    fileSizeFormater,
    getExt,
    handleClickInput,
    handleClickUtil,
    handleDragUtil,
    handleDropUtil,
    isValidateActive,
    shrinkWord,
    fakeFuiUpload,
    prepToUploadOne,
    setPrepToUploading,
    sleepPreparing,
    uploadOne,
    uploadOneExtFile,
    cleanInput, addClassName, getRandomInt
} from "./utils";

export {
    fileListvalidator,
    separateAccept,
    validateAccept,
    validateExtFile,
    validateExtFileList,
    validateFile
} from "./validation";


export { createFuiRippleFromDiv, createRippleButton } from "./ripple";

export {
    asureColor,
    brighterColor,
    colourNameToHex,
    darkerColor,
    hexColorToRGB,
    hexTodec,
    isHexColor,
    NAMED_COLORS
} from "./color";

export {
    SyntheticFile,
    createListOfMultiTypeFile,
    createSyntheticFile,
    makeSyntheticExtFile
} from "./synthetic-file";

export { extFileReconcilation } from "./file-manager";
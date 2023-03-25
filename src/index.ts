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
    ExtFileManager,
    createUploadConfig
} from "theamazingunkowntext"

export type {
    ExtFile,
    ExtFileListMap,
    UPLOADSTATUS,
    Localization,
    ServerResponse,
    UploadResponse,
    UploadConfig,
    ValidateFileResponse,
    IconsMap
} from "theamazingunkowntext"


export { default as FilesUiProvider } from "./FilesUiProvider/FilesUiProvider";
export * from "./FilesUiProvider/FilesUiProvider";


export type { IconsSet, FilesUIConfig } from "./FilesUiProvider";
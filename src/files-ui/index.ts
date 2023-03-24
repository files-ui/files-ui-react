export { default as Dropzone } from "./components/dropzone/components/dropzone/Dropzone";
export * from "./components/dropzone/components/dropzone/Dropzone";

export { default as FileInputButton } from "./components/file-input-button/FileInputButton";
export * from "./components/file-input-button/FileInputButton";

export { default as Avatar } from "./components/avatar/Avatar";
export * from "./components/avatar/Avatar";

export { default as FileCard } from "./components/file-card/FileCard";
export * from "./components/file-card/FileCard";

export { default as FileMosaic } from "./components/file-mosaic/components/file-mosaic/FileMosaic";
export * from "./components/file-mosaic/components/file-mosaic/FileMosaic";

export { default as FullScreen } from "./components/previews/FullScreen/FullScreen";
export * from "./components/previews/FullScreen/FullScreen";

export { default as ImagePreview } from "./components/previews/ImagePreview/ImagePreview";
export * from "./components/previews/ImagePreview/ImagePreview";

export { default as VideoPreview } from "./components/previews/VideoPreview/VideoPreview";
export * from "./components/previews/VideoPreview/VideoPreview";

export { default as MaterialButton } from "./components/material-button/MaterialButton";
export * from "./components/material-button/MaterialButton";

export type { FileMosaicProps } from "./components/file-mosaic/components/file-mosaic/FileMosaicProps";
export type { DropzoneProps } from "./components/dropzone/components/dropzone/DropzoneProps";
export type { FileInputButtonProps } from "./components/file-input-button/InputButtonProps";
export type { FileCardProps } from "./components/file-card/FileCardProps";
export type { AvatarProps } from "./components/avatar/AvatarProps";

export { useFakeProgress } from "./hooks";

export {
    createListOfMultiTypeFile,
    uploadFile,
    uploadFormData,
    uploadExtFile,
    ExtFileInstance,
    ExtFileManager,
    createUploadConfig
} from "./core";

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
} from "./core";


export { default as FilesUiProvider } from "./FilesUiProvider/FilesUiProvider";
export * from "./FilesUiProvider/FilesUiProvider";


export type { IconsSet, FilesUIConfig } from "./FilesUiProvider";
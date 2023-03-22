export type PageList =
    "Getting Started" |
    "Usage" |
    "Dropzone Demo" |
    "FileMosaic Demo" |
    "FileCard Demo" |
    "FileInputButton Demo" |
    "FullScreen Demo" |
    "Avatar Demo" |
    "Dropzone Api" |
    "FileMosaic Api" |
    "FileCard Api" |
    "FileInputButton Api" |
    "FullScreen Api" |
    "Avatar Api" |
    "ImagePreview Api" |
    "VideoPreview Api" |
    "File Icons" |
    "Localization" |
    "Server Side" |
    "Types" |
    "File Reders" |
    "File Upload" |
    "File Download"
    ;

export type PageProps = {
    pageBefore: PageProps;
    pageAfter: PageProps;
    url?: string;
    key: PageList;
}
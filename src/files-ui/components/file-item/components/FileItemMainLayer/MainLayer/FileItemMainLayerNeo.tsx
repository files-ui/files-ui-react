import * as React from "react";
//import { FileItemProps } from "../FileItem/FileItemProps";
//import FileItemStatus from "../FileItemStatus/FileItemStatus";

import "./FileItemMainLayer.scss";

import MainLayerHeaderNeo from "../MainLayerHeader/MainLayerHeaderNeo";
import MainLayerBodyNeo from "../MainLayerBody/MainLayerBodyNeo";
import MainLayerFooterNeo from "../MainLayerFooter/MainLayerFooterNeo";
import { Localization, UPLOADSTATUS } from "../../../../../core";
//import {shrinkWord} from "./../../utils";
export interface FileItemMainLayerNeoProps {
  onOpenInfo: Function;
  onOpenImage: Function | undefined;
  onOpenVideo: Function | undefined;
  onDelete: Function | undefined;
  onDownloadFile: Function | undefined;
  //fileNamePosition: FileItemProps["fileName"];
  fileName: string;
  info: boolean;
  /**
   * whether show a valid or rejected message
   * by def. valid is false (if not present, is false too)
   */
  valid?: boolean | null;
  isImage: boolean;
  isVideo: boolean;
  uploadStatus?: UPLOADSTATUS;
  sizeFormatted: string;
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
  hovering?: boolean;
  /**
   * the current percentage upload progress
   *
   */
  progress?: number;
  /**
   * abort event
   */
  onAbort?: Function;
  onCancel?: Function;
  showInfo: boolean;
}

const FileItemMainLayerNeo: React.FC<FileItemMainLayerNeoProps> = (
  props: FileItemMainLayerNeoProps
) => {
  const {
    onDelete,
    info,
    valid,
    isImage,
    isVideo,
    showInfo,
    onOpenInfo,
    onOpenImage,
    onOpenVideo,
    onDownloadFile,
    sizeFormatted,
    uploadStatus,
    localization,
    hovering,
    progress,
    onAbort,
    onCancel,
  } = props;

  return (
    <React.Fragment>
      <div className={"dui-main-layer-container"}>
        <MainLayerHeaderNeo
          hide={showInfo}
          onDelete={onDelete}
          uploadStatus={uploadStatus}
          hovering={hovering}
        />

        <MainLayerBodyNeo
          hide={showInfo}
          uploadStatus={uploadStatus}
          localization={localization}
          progress={progress}
          onAbort={onAbort}
          valid={valid}
          hovering={hovering}
          onCancel={onCancel}
        />
        <MainLayerFooterNeo
          hide={showInfo}
          uploadStatus={uploadStatus}
          // uploadComplete={uploadComplete}
          localization={localization}
          sizeFormatted={sizeFormatted}
          valid={valid}
          info={info}
          isImage={isImage}
          isVideo={isVideo}
          onDownloadFile={onDownloadFile}
          onOpenImage={onOpenImage}
          onOpenVideo={onOpenVideo}
          onOpenInfo={onOpenInfo}
          hovering={hovering}
        />
      </div>
    </React.Fragment>
  );
};
export default FileItemMainLayerNeo;

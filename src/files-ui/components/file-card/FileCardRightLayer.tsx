import * as React from "react";
import { Localization, UPLOADSTATUS } from "../../core";
import {
  Clear,
  DownloadFile,
  InfoDisney,
  PlayIcon,
  Visibility,
} from "../icons";
import "./FileMosaicRightLayer.scss";
declare type FileCardRightLayerProps = {
  darkMode?: boolean;
  deleteIcon?: boolean;
  onDelete?: Function;

  valid: boolean | null | undefined;
  uploadStatus?: UPLOADSTATUS;
  localization?: Localization;

  sizeFormatted: string;

  imageIcon: boolean;
  onSee: ((imageSource: string | undefined) => void) | undefined;

  videoIcon: boolean;
  onWatch: ((videoSource: File | undefined) => void) | undefined;

  downloadIcon: boolean;
  onDownload: Function | undefined;

  infoIcon: boolean;
  onOpenInfo: Function | undefined;

  isActive?: boolean;
};
const FileCardRightLayer: React.FC<FileCardRightLayerProps> = (
  props: FileCardRightLayerProps
) => {
  const {
    darkMode,
    deleteIcon,
    downloadIcon,
    imageIcon,
    infoIcon,
    onDelete,
    onDownload,
    onOpenInfo,
    onSee,
    onWatch,
    sizeFormatted,
    valid,
    videoIcon,
    localization,
    uploadStatus,
    isActive,
  } = props;

  return (
    <>
      <div className="file-card-right-layer-header">
        {isActive && deleteIcon && (
          <Clear
            className={
              darkMode ? "files-ui-file-icon dark-mode" : "files-ui-file-icon"
            }
            color={darkMode ? "#121212" : "rgba(255,255,255,0.851)"}
            onClick={onDelete}
            size="small"
            colorFill="transparent"
          />
        )}
      </div>
      <div className="file-card-right-layer-footer">
        {isActive && (
          <React.Fragment>
            {imageIcon && (
              <Visibility
                className={
                  darkMode
                    ? "files-ui-file-icon dark-mode"
                    : "files-ui-file-icon"
                }
                color={darkMode ? "#121212" : "rgba(255,255,255,0.851)"}
                onClick={onSee}
                size="small"
              />
            )}

            {videoIcon && (
              <PlayIcon
                className={
                  darkMode
                    ? "files-ui-file-icon dark-mode"
                    : "files-ui-file-icon"
                }
                color={darkMode ? "#121212" : "rgba(255,255,255,0.851)"}
                onClick={onWatch}
                size="small"
              />
            )}
            {downloadIcon && (
              <DownloadFile
                className={
                  darkMode
                    ? "files-ui-file-icon dark-mode"
                    : "files-ui-file-icon"
                }
                color={darkMode ? "#121212" : "rgba(255,255,255,0.851)"}
                onClick={onDownload}
                size="small"
              />
            )}
            {infoIcon && (
              <InfoDisney
                className={
                  darkMode
                    ? "files-ui-file-icon dark-mode"
                    : "files-ui-file-icon"
                }
                onClick={onOpenInfo}
                color={darkMode ? "#121212" : "rgba(255,255,255,0.851)"}
                size="micro"
              />
            )}
          </React.Fragment>
        )}
      </div>
    </>
  );
};
export default FileCardRightLayer;

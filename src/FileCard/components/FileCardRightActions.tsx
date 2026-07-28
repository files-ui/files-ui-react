import * as React from "react";
import {
  Clear,
  DownloadFile,
  InfoDisney,
  PlayIcon,
  Visibility,
} from "../../icons";
import "./FileCardRightActions.css";

declare type FileCardRightActionsProps = {
  darkMode?: boolean;
  deleteIcon?: boolean;
  onDelete?: Function;

  imageIcon: boolean;
  onSee: ((imageSource: string | undefined) => void) | undefined;

  videoIcon: boolean;
  onWatch: ((videoSource: File | undefined) => void) | undefined;

  downloadIcon: boolean;
  onDownload: Function | undefined;

  infoIcon: boolean;
  onOpenInfo: Function | undefined;

  sizeMultiplier?: number;

  isActive?: boolean;
  visible?: boolean;
};
const FileCardRightActions: React.FC<FileCardRightActionsProps> = (
  props: FileCardRightActionsProps
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

    videoIcon,
    isActive,
    visible,
    sizeMultiplier = 1,
  } = props;

  const iconSize = Math.max(10, Math.round(15 * sizeMultiplier));
  const infoIconSize = Math.max(6, Math.round(8 * sizeMultiplier));

  if (visible)
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
              size={iconSize}
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
                  size={iconSize}
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
                  size={iconSize}
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
                  size={iconSize}
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
                  size={infoIconSize}
                />
              )}
            </React.Fragment>
          )}
        </div>
      </>
    );
  return <></>;
};
export default FileCardRightActions;

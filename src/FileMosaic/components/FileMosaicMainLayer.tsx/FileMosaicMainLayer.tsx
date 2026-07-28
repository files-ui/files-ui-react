import * as React from "react";
import {
  Clear,
  DownloadFile,
  InfoDisney,
  PlayIcon,
  Visibility,
} from "../../../icons";
import FileMosaicSize from "../FileMosaicSize/FileMosaicSize";
import FileMosaicStatus from "../FileMosaicStatus/FileMosaicStatus";
import { FileMosaicMainLayerProps } from "./FileMosaicMainLayerProps";

const FileMosaicMainLayer: React.FC<FileMosaicMainLayerProps> = React.memo(
  (props: FileMosaicMainLayerProps) => {
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
    sizeMultiplier = 1,
  } = props;

  const iconSize = Math.max(10, Math.round(15 * sizeMultiplier));
  const infoIconSize = Math.max(6, Math.round(8 * sizeMultiplier));

  return (
    <React.Fragment>
      <div className="file-mosaic-main-layer-header">
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
      <div className="file-mosaic-main-layer-footer">
        <div className="file-mosaic-footer-left">
          <FileMosaicStatus
            valid={valid}
            uploadStatus={uploadStatus}
            localization={localization}
          />
          {isActive && sizeFormatted && (
            <FileMosaicSize sizeFormatted={sizeFormatted} />
          )}
        </div>
        <div className="file-mosaic-footer-right">
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
      </div>
    </React.Fragment>
  );
  }
);
export default FileMosaicMainLayer;

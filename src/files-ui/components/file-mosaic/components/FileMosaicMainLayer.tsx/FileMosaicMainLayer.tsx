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

const FileMosaicMainLayer: React.FC<FileMosaicMainLayerProps> = (
  props: FileMosaicMainLayerProps
) => {
  const {
    darkMode,deleteIcon,
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
    <React.Fragment>
      <div className="file-mosaic-main-layer-header">
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
      <div className="file-mosaic-main-layer-footer">
        <div className="file-mosaic-footer-left">
          <FileMosaicStatus
            valid={valid}
            uploadStatus={uploadStatus}
            localization={localization}
          />
          {isActive && <FileMosaicSize sizeFormatted={sizeFormatted} />}
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
      </div>
    </React.Fragment>
  );
};
export default FileMosaicMainLayer;

import React, { FC, Fragment } from "react";

import Loader from "../../../loader/DefaultLoader/loader";
import {
  CheckCircle,
  CloudDone,
  DoDisturb,
  Remove,
  // UploadDone,
  UploadError,
} from "../../../icons";
import { FileItemStatusProps } from "./FileItemStatusProps";
import "./FileItemStatus.scss";
import { FileItemLocalizerSelector, LocalLabels } from "../../../../core";

const FileItemStatus: FC<FileItemStatusProps> = (
  props: FileItemStatusProps
) => {
  const {
    valid,
    uploadStatus,
    //message,
    localization,
    progress,
    onAbort,
  } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  const handleAbort = () => {
    onAbort?.();
  };
  return (
    <Fragment>
      {uploadStatus ? (
        uploadStatus === "uploading" ? (
          <div
            className={`dui-file-item-status-container file-status-loading${
              progress ? " percentage" : ""
            }`}
          >
            {onAbort && (
              <div className="abort-button">
                <Remove
                  //className="dui-file-item-icon"
                  color="red"
                  onClick={handleAbort}
                  size="semi-medium"
                  colorFill="transparent"
                />
              </div>
            )}

            {progress && (
              <div className="uploading-text up">
                <p>{FileItemStatusLocalizer.uploading as string}</p>
              </div>
            )}
            <Loader />
            <div className="uploading-text down">
              {progress ? (
                <p className="percentage">
                  {progress.toFixed(0) + "%" || "100%"}
                </p>
              ) : (
                <p>{FileItemStatusLocalizer.uploading as string}</p>
              )}
            </div>
          </div>
        ) : uploadStatus === "aborted" ? (
          <div className="dui-file-item-status-container file-status-error">
            <UploadError
              color="#f44336"
              size="semi-medium"
              className="status-icon"
            />
            {FileItemStatusLocalizer.aborted as string}
          </div>
        ) : uploadStatus === "success" ? (
          <div className="dui-file-item-status-container file-status-ok">
            <CloudDone color="#4caf50" size="small" className="status-icon" />
            {FileItemStatusLocalizer.success as string}
          </div>
        ) : (
          <div className="dui-file-item-status-container file-status-error">
            <UploadError
              color="#f44336"
              size="semi-medium"
              className="status-icon"
            />
            {FileItemStatusLocalizer.error as string}
          </div>
        )
      ) : valid !== null && typeof valid !== "undefined" ? (
        <Fragment>
          {valid ? (
            <div className="dui-file-item-status-container file-status-ok">
              <CheckCircle
                color="#4caf50"
                size="small"
                className="status-icon"
              />
              {FileItemStatusLocalizer.valid as string}
            </div>
          ) : (
            <div className="dui-file-item-status-container file-status-error">
              <DoDisturb color="#f44336" size="small" className="status-icon" />
              {FileItemStatusLocalizer.denied as string}
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};
export default FileItemStatus;

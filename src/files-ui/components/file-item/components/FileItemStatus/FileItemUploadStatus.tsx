import * as React from "react";
import {
  FileItemLocalizerSelector,
  Localization,
  LocalLabels,
  UPLOADSTATUS,
} from "../../../../core";
import { CloudDone, UploadError } from "../../../icons";
import "./FileItemUploadStatus.scss";
export type FileItemUploadStatusProps = {
  /**
   * sucess
   * error
   * aborted
   */
  uploadStatus?: UPLOADSTATUS;
  /**
   * language to be used on labels
   */
  localization?: Localization;
};
/**
 * Upload ststaus: "success", "aborted" and "error"
 * @returns
 */
const FileItemUploadStatus: React.FC<FileItemUploadStatusProps> = (
  props: FileItemUploadStatusProps
) => {
  const { uploadStatus, localization } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  if (
    uploadStatus &&
    ["success", "aborted", "error"].includes(
      uploadStatus
    )
  ) {
    const overloadClassName: string =
      uploadStatus === "success"
        ? " file-status-success"
        : " file-status-error-aborted";
    return (
      <div
        className={`fui-file-item-upload-status-container${overloadClassName}`}
      >
        {uploadStatus === "success" ? (
          <>
            <CloudDone color="#4caf50" size="small" className="status-icon" />
            {FileItemStatusLocalizer.success as string}
          </>
        ) : (
          <>
            <UploadError
              color="#f44336"
              size="semi-medium"
              className="status-icon"
            />
            {uploadStatus === "aborted" ? (
              <>{FileItemStatusLocalizer.aborted as string}</>
            ) : (
              <> {FileItemStatusLocalizer.error as string}</>
            )}
          </>
        )}
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
};
export default FileItemUploadStatus;

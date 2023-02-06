import * as React from "react";
import { FileItemLocalizerSelector, Localization, LocalLabels, UPLOADSTATUS } from "../../../../core";
import { DefaultLoader } from "../../../loader";

export type FileItemUploadingStatusProps = {
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
const FileItemUploadingStatus: React.FC<FileItemUploadingStatusProps> = (
  props: FileItemUploadingStatusProps
) => {
  const { uploadStatus, localization } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;
  if (uploadStatus && uploadStatus === "uploading") {
    return (
      <DefaultLoader label={FileItemStatusLocalizer.uploading as string} />
    );
  }
  return <React.Fragment></React.Fragment>;
};
export default FileItemUploadingStatus;

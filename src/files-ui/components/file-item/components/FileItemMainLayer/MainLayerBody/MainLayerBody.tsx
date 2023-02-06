import * as React from "react";
import { Localization, UPLOADSTATUS } from "../../../../../core";

import FileItemStatus from "../../FileItemStatus/FileItemStatus";
import FileItemLoader from "../FileItemLoader/FileItemLoader";
import "./MainLayerBody.scss";
export type MainLayerBodyProps = {
  /**
   * whether show a valid or rejected message
   * by def. valid is false (if not present, is false too)
   */
  valid?: boolean | null;

  showInfo: boolean;
  /**
   * This feature is hidden, it is not present on the documentation
   * because it's experimental. If you found this prop, you can test it
   * and comment us if any issue is found. Thanks in advance.
   *
   * Make file name, info layer, size and "valid message"
   * not visible
   */
  onlyImage?: boolean;
  uploadStatus?: UPLOADSTATUS;

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
  uploadComplete?: boolean;
};
const MainLayerBody: React.FC<MainLayerBodyProps> = (
  props: MainLayerBodyProps
) => {
  const {
    uploadStatus,
    showInfo,
    hovering,
    //uploadComplete,
    localization,
    onAbort,
    progress,
    onlyImage,
    valid,
    onCancel,
  } = props;

  const [uploadComplete, setUploadComplete] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (
      uploadStatus &&
      ["success", "error", "success", "aborted"].includes(uploadStatus)
    ) {
      setTimeout(() => {
        setUploadComplete(true);
      }, 2000);
    }
    return () => {
      setUploadComplete(false);
    };
  }, [uploadStatus]);

/*   React.useEffect(() => {
    console.log("MainLayerBody", uploadStatus, uploadComplete,progress);
  }, [uploadStatus, uploadComplete]); */

  return (
    <div className="dui-file-item-main-layer-body">
      {/** UPLOADING, upload isn't completed, showInfo=false and uploadStatus != undef  */}
      {(uploadStatus === "preparing" ||
        uploadStatus === "uploading") &&
      !showInfo &&
      !uploadComplete ? (
        <React.Fragment>
          <FileItemLoader
            uploadStatus={uploadStatus}
            localization={localization as Localization}
            progress={progress}
            onAbort={onAbort}
            height={60}
            width={60}
            onCancel={onCancel}
          />
          <div className="dui-file-status-absolute-container">
            {!showInfo && !onlyImage && hovering && (
              <React.Fragment>
                {/** When always actie or hovering he file status validation must be visible
                 * valid, not valid
                 *
                 */}
                {uploadStatus &&
                uploadStatus !== "preparing" &&
                uploadStatus !== "uploading" ? (
                  <FileItemStatus
                    uploadStatus={uploadStatus}
                    localization={localization as Localization}
                  />
                ) : (
                  <FileItemStatus
                    valid={valid}
                    localization={localization as Localization}
                  />
                )}
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/** Upload ststus or valid status depending on the value on the corner */}
          <div className="dui-file-status-aboslute-container">
            {!showInfo && !onlyImage && hovering && (
              <React.Fragment>
                {uploadStatus ? (
                  <FileItemStatus
                    uploadStatus={uploadStatus}
                    localization={localization as Localization}
                  />
                ) : (
                  <FileItemStatus
                    valid={valid}
                    localization={localization as Localization}
                  />
                )}
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default MainLayerBody;

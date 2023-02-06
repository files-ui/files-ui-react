import * as React from "react";
import { Localization, UPLOADSTATUS } from "../../../../../core";

import FileItemUploadStatus from "../../FileItemStatus/FileItemUploadStatus";
import FileItemValidStatus from "../../FileItemStatus/FileItemValidStatus";
import FileItemLoader from "../FileItemLoader/FileItemLoader";
import "./MainLayerBody.scss";

export type MainLayerBodyNeoProps = {
  /**
   * whether show a valid or rejected message
   * by def. valid is false (if not present, is false too)
   */
  valid?: boolean | null;
  hide?: boolean;
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
const MainLayerBodyNeo: React.FC<MainLayerBodyNeoProps> = (
  props: MainLayerBodyNeoProps
) => {
  const {
    uploadStatus,
    hide,
    hovering,
    //uploadComplete,
    localization,
    onAbort,
    progress,

    valid,
    onCancel,
  } = props;

  const [uploadComplete, setUploadComplete] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (
      uploadStatus &&
      ["success", "error", "aborted"].includes(uploadStatus)
    ) {
      setTimeout(() => {
        setUploadComplete(true);
      }, 2000);
    }
    return () => {
      setUploadComplete(false);
    };
  }, [uploadStatus]);
  //console.log("MainLayerBody onCancel", onCancel);
  return (
    <div className="dui-file-item-main-layer-body">
      {/** Uploading or preparing stage? */}
      {!hide && !uploadComplete && (
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
          <FileItemUploadStatus
            uploadStatus={uploadStatus}
            localization={localization}
          />
        </React.Fragment>
      )}
      <div className="dui-file-status-absolute-container">
        {!hide && hovering && (
          <React.Fragment>
            {uploadComplete ? (
              <FileItemUploadStatus
                uploadStatus={uploadStatus}
                localization={localization}
              />
            ) : (
              <FileItemValidStatus valid={valid} localization={localization} />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default MainLayerBodyNeo;

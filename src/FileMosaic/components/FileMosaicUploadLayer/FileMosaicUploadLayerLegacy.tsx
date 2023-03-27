import * as React from "react";
import { FileMosaicUploadLayerProps } from "./FileMosaicUploadLayerProps";
import "./FileMosaicUploadLayer.scss";
import InfiniteLoader from "../../../loader/InfiniteLoader/InfiniteLoader";
import {
  FileItemLocalizerSelector,
  LocalLabels,
  UPLOADSTATUS,
} from "defpythoniztioningtrycrypto"
import { CheckCircle, CloudDone, UploadError } from "../../../icons";
import { DynamicLoader } from "../../../loader";

const FileMosaicUploadLayerLegacy: React.FC<FileMosaicUploadLayerProps> = (
  props: FileMosaicUploadLayerProps
) => {
  const { uploadStatus, onCancel, onAbort, progress, localization } = props;
  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;

  //console.log("CHANGE uploadStatus", uploadStatus);
  console.log("FileMosaicUploadLayerLegacy CHANGE progress", progress);
  const [lastUploadStatus, setLastUploadStatus] = React.useState<
    UPLOADSTATUS | undefined
  >(undefined);
  const [elevate, setElevate] = React.useState(false);
  //  const [layers, setLayers] = React.useState();

  React.useEffect(() => {
    if (uploadStatus === lastUploadStatus) {
      //no elevation
    } else {
      setLastUploadStatus(uploadStatus);
    }

    /*    if(lastUploadStatus===undefined){
      return;
    }  */

    if (lastUploadStatus !== undefined && lastUploadStatus !== uploadStatus) {
      setElevate(true);
    }

    setTimeout(() => {
      setElevate(false);
      setLastUploadStatus(uploadStatus);
    }, 2000);
  }, [uploadStatus]);

  const PreparingStatus = () => {
    return (
      <React.Fragment>
        <InfiniteLoader
          onClick={() => {
            alert("clicked");
          }}
          size={60}
        />
        <text> preparing</text>
      </React.Fragment>
    );
  };
  const UploadingStatus = () => {
    return (
      <React.Fragment>
        {progress ? (
          <DynamicLoader
            size={60}
            x={30}
            y={30}
            radius={27}
            percentage={progress}
            width={6}
            hidePerncentage={onAbort !== undefined}
          />
        ) : (
          <InfiniteLoader
            onClick={() => {
              alert("clicked");
            }}
            size={60}
          />
        )}
        <text> {FileItemStatusLocalizer.uploading as string}</text>
      </React.Fragment>
    );
  };
  const SuccessStatus = () => {
    return (
      <React.Fragment>
        <CloudDone color="#4caf50" size={60} />
        <text> success</text>
      </React.Fragment>
    );
  };
  const ErrorStatus = () => {
    return (
      <React.Fragment>
        <UploadError color="#f44336" size={60} />
        <text> error</text>
      </React.Fragment>
    );
  };
  const Empty = () => {
    return (
      <React.Fragment>
        <text> VACIOOOOO</text>
      </React.Fragment>
    );
  };

  const StatusSelector = (status: UPLOADSTATUS | undefined) => {
    switch (status) {
      case "preparing":
        return <PreparingStatus />;
      case "uploading":
        return <UploadingStatus />;
      case "error":
        return <ErrorStatus />;
      case "success":
        return <SuccessStatus />;
      default:
        return <Empty />;
    }
  };
  //default phase
  if (lastUploadStatus === undefined && uploadStatus === undefined) {
    return <></>;
  }
  return (
    <div
      className={
        elevate
          ? "elevation-layer-container elevate"
          : "elevation-layer-container"
      }
    >
      <div className="elevate-layer">{StatusSelector(lastUploadStatus)}</div>

      <div className="appear-layer">{StatusSelector(uploadStatus)}</div>
    </div>
  );
};
export default FileMosaicUploadLayerLegacy;

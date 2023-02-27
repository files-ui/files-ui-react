import * as React from "react";
import { FileMosaicUploadLayerProps } from "./FileMosaicUploadLayerProps";
import "./FileMosaicUploadLayer.scss";
import InfiniteLoader from "../../../loader/InfiniteLoader/InfiniteLoader";
import {
  FileItemLocalizerSelector,
  LocalLabels,
  UPLOADSTATUS,
} from "../../../../core";
import { CheckCircle, Clear, DoDisturb } from "../../../icons";
import { DynamicLoader } from "../../../loader";
import {
  AbortedStatus,
  EmptyStatus,
  ErrorStatus,
  PreparingStatus,
  SuccessStatus,
  UploadingStatus,
} from "../../../file-status";

const FileMosaicUploadLayer: React.FC<FileMosaicUploadLayerProps> = (
  props: FileMosaicUploadLayerProps
) => {
  const { uploadStatus, onCancel, onAbort, progress, localization } = props;
  //console.log("FileMosaicUploadLayer CHANGE progress", progress, uploadStatus);
  const elevationContainerRef = React.useRef<HTMLDivElement | null>(null);
  const listContainerStoryRef = React.useRef<HTMLDivElement | null>(null);

  const FileItemStatusLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization
  ).status as LocalLabels;

  const [statusHistory, setStatusHistory] = React.useState<
    Array<UPLOADSTATUS | undefined>
  >([undefined]);

  React.useEffect(() => {
    setStatusHistory((statusHistory: Array<UPLOADSTATUS | undefined>) => {
      return [...statusHistory, uploadStatus];
    });
  }, [uploadStatus]);

  const elevate = () => {
    const currentElevationContainer = elevationContainerRef.current;
    const currentElevationList = listContainerStoryRef.current;
    if (currentElevationContainer === null || currentElevationList === null)
      return;

    currentElevationList.style.top =
      0 - (statusHistory.length - 1) * 132 + "px";
  };
  React.useEffect(() => {
    if (statusHistory.length > 1) elevate();
    // eslint-disable-next-line
  }, [statusHistory.length]);

  //default phase

  return (
    <div className={"elevation-layer-container"} ref={elevationContainerRef}>
      <div className="elevation-list" ref={listContainerStoryRef}>
        {statusHistory.map((status, index) => {
          switch (status) {
            case "preparing":
              return (
                <div className="elevation-item" key={index + 1}>
                  <PreparingStatus onCancel={onCancel}/>
                </div>
              );
            case "uploading":
              return (
                <div className="elevation-item" key={index + 1}>
                  <UploadingStatus onAbort={onAbort} progress={progress}/>
                </div>
              );
            case "error":
              return (
                <div className="elevation-item" key={index + 1}>
                  <ErrorStatus />
                </div>
              );
            case "success":
              return (
                <div className="elevation-item" key={index + 1}>
                  <SuccessStatus />
                </div>
              );
            case "aborted":
              return (
                <div className="elevation-item" key={index + 1}>
                  <AbortedStatus />
                </div>
              );
            default:
              return (
                <div className="elevation-item" key={index + 1}>
                  <EmptyStatus />
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};
export default FileMosaicUploadLayer;

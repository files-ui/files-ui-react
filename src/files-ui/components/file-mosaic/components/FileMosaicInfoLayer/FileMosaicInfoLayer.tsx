import * as React from "react";
import { Cancel } from "../../../icons";
import FileMosaicStatus from "../FileMosaicStatus/FileMosaicStatus";
import { FileMosaicInfoLayerProps } from "./FileMosaicInfoLayerProps";

const FileMosaicInfoLayer: React.FC<FileMosaicInfoLayerProps> = (
  props: FileMosaicInfoLayerProps
) => {
  const {
    valid,
    localization,
    onCloseInfo,
    uploadStatus,
    localName,
    sizeFormatted,
    localType,
  } = props;
  return (
    <React.Fragment>
      <div className="files-ui-file-mosaic-info-layer-header">
        <Cancel
          style={{ margin: 0, right: 0, top: 0 }}
          color="rgba(255,255,255,0.8)"
          onClick={onCloseInfo}
          colorFill="black"
        />
        <FileMosaicStatus
          valid={valid}
          uploadStatus={uploadStatus}
          localization={localization}
        />
      </div>
      <div className="heading">Name:</div>
      <div className="label">{localName}</div>
      <div className="heading">Size:</div>
      <div className="label">{sizeFormatted}</div>
      <div className="heading">Type:</div>
      <div className="label">{localType}</div>
    </React.Fragment>
  );
};
export default FileMosaicInfoLayer;

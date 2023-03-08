import * as React from "react";
import { FileMosaicInfoLayerProps } from "../../file-mosaic/components/FileMosaicInfoLayer/FileMosaicInfoLayerProps";
import FileMosaicStatus from "../../file-mosaic/components/FileMosaicStatus/FileMosaicStatus";
import { Cancel } from "../../icons";
type FileCardInfoLayerProps = FileMosaicInfoLayerProps;
const FileCardInfoLayer: React.FC<FileCardInfoLayerProps> = (
  props: FileCardInfoLayerProps
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
    <div className="file-card-file-info">
      <div className="files-ui-file-card-info-layer-header">
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
    </div>
  );
};
export default FileCardInfoLayer;

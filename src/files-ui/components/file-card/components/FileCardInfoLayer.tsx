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
      {/*   <FileMosaicStatus
        style={{ margin: 0, right: 5, bottom: 0, position:"absolute" }}
          valid={valid}
          uploadStatus={uploadStatus}
          localization={localization}
        /> */}
        <Cancel
          style={{ margin: 0, right: 5, top: 0, position:"absolute" }}
          color="rgba(255,255,255,0.8)"
          onClick={onCloseInfo}
          colorFill="black"
        />
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

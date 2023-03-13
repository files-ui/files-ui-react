import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "../../../../core";
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

  const FileItemLocalizer: LocalLabels =
    FileItemLocalizerSelector(localization);

  const {
    name: nameLabel,
    size: sizeLabel,
    type: typeLabel,
  } = FileItemLocalizer.fullInfoLayer as LocalLabels;

  return (
    <React.Fragment>
      <div className="files-ui-file-mosaic-info-layer-header">
        <Cancel
          //style={{ margin: 0, right: 0, top: 0 }}
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
      <div className="heading">{nameLabel as string}</div>
      <div className="label">{localName}</div>
      <div className="heading">{sizeLabel as string}</div>
      <div className="label">{sizeFormatted}</div>
      <div className="heading">{typeLabel as string}</div>
      <div className="label">{localType}</div>
    </React.Fragment>
  );
};
export default FileMosaicInfoLayer;

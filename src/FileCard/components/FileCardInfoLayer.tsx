import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "defpythoniztioningtrycrypto"
import { FileMosaicInfoLayerProps } from "../../FileMosaic";
import { Cancel } from "../../icons";
type FileCardInfoLayerProps = FileMosaicInfoLayerProps;
const FileCardInfoLayer: React.FC<FileCardInfoLayerProps> = (
  props: FileCardInfoLayerProps
) => {
  const {
    //valid,
    localization,
    onCloseInfo,
   // uploadStatus,
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
    <div className="file-card-file-info">
      <Cancel
        style={{ margin: 0, right: 5, top: 0, position: "absolute" }}
        color="rgba(255,255,255,0.8)"
        onClick={onCloseInfo}
        colorFill="black"
      />
      <div className="heading">{nameLabel as string}</div>
      <div className="label">{localName}</div>
      <div className="heading">{sizeLabel as string}</div>
      <div className="label">{sizeFormatted}</div>
      <div className="heading">{typeLabel as string}</div>
      <div className="label">{localType}</div>
    </div>
  );
};
export default FileCardInfoLayer;

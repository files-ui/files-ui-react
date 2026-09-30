import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "@files-ui/core"
import { FileMosaicInfoLayerProps } from "../../FileMosaic";
import { Cancel, CheckBox, CheckBoxOutline } from "../../icons";
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
    selectable,
    selected,
    onSelect,
    fileId,
    darkMode,
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
      {selectable && (
        <div
          className={darkMode ? "files-ui-selection-checkbox dark-mode" : "files-ui-selection-checkbox"}
          style={{ position: "absolute", top: 8, left: 8 }}
        >
          {selected ? (
            <CheckBox
              onClick={(evt: React.MouseEvent) => { evt.stopPropagation(); onSelect?.(fileId, !selected); }}
              size="small"
              color={darkMode ? "#1976d2" : "#1976d2"}
            />
          ) : (
            <CheckBoxOutline
              onClick={(evt: React.MouseEvent) => { evt.stopPropagation(); onSelect?.(fileId, !selected); }}
              size="small"
              color={darkMode ? "#616161" : "#757575"}
            />
          )}
        </div>
      )}
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

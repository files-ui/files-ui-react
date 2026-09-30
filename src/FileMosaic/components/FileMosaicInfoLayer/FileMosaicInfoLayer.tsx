import * as React from "react";
import { FileItemLocalizerSelector, LocalLabels } from "@files-ui/core"
import { Cancel, CheckBox, CheckBoxOutline } from "../../../icons";
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
    <React.Fragment>
      <div className="files-ui-file-mosaic-info-layer-header">
        {selectable && (
          <div
            className={darkMode ? "files-ui-selection-checkbox dark-mode" : "files-ui-selection-checkbox"}
            style={{ position: "relative", top: "auto", left: "auto", flexShrink: 0 }}
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

import * as React from "react";
import { UPLOADSTATUS } from "../../../../../core";
import { Clear } from "../../../../icons";
import "./MainLayerHeader.scss";

export type MainLayerHeaderNeoProps = {
  onDelete?: Function;
  uploadStatus?: UPLOADSTATUS;
  hovering?: boolean;
  hide?: boolean;
};

const MainLayerHeaderNeo: React.FC<MainLayerHeaderNeoProps> = (
  props: MainLayerHeaderNeoProps
) => {
  const { uploadStatus, onDelete, hovering, hide } = props;
  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <div className="dui-main-layer-header-container">
      {hovering &&
        !hide &&
        //  ![
        uploadStatus !== "preparing" &&
        uploadStatus !== "uploading" &&
        //  undefined,
        //null,
        //].includes(uploadStatus)
        onDelete && (
          <Clear
            className="dui-file-item-icon"
            color="rgba(255,255,255,0.851)"
            onClick={handleDelete}
            size="small"
            colorFill="transparent"
          />
        )}
    </div>
  );
};
export default MainLayerHeaderNeo;

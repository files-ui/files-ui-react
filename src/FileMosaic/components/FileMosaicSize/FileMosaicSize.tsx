import * as React from "react";
import "./FileMosaicSize.css";
export type FileItemSizeProps = {
  sizeFormatted?: string;
};
const FileMosaicSize: React.FC<FileItemSizeProps> = React.memo(
  (props: FileItemSizeProps) => {
    const { sizeFormatted } = props;
    return (
      <React.Fragment>
        {sizeFormatted && (
          <div className="filesui-file-item-size">{sizeFormatted}</div>
        )}
      </React.Fragment>
    );
  }
);
export default FileMosaicSize;

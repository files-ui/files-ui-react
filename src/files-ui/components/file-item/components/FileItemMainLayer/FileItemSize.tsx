import * as React from "react";
import "./FileItemSize.scss";
export type FileItemSizeProps = {
  sizeFormatted?: string;
};
const FileItemSize: React.FC<FileItemSizeProps> = (
  props: FileItemSizeProps
) => {
  const { sizeFormatted } = props;
  return (
    <React.Fragment>
      {sizeFormatted && (
        <div className="dui-file-item-size">{sizeFormatted}</div>
      )}
    </React.Fragment>
  );
};
export default FileItemSize;

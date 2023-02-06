import * as React from "react";

export type FileMosaicNameProps = {
  fileName?: string;
};

const FileMosaicName: React.FC<FileMosaicNameProps> = (
  props: FileMosaicNameProps
) => {
  const { fileName } = props;
  if (fileName) return <span>{fileName}</span>;
  else {
    return <></>;
  }
};
export default FileMosaicName;

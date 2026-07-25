import * as React from "react";
import type { FileMosaicProps } from "./FileMosaicProps";
import FileMosaicClient from "./FileMosaicClient";

const FileMosaicContainer: React.FC<FileMosaicProps> = (
  props: FileMosaicProps
) => {
  return <FileMosaicClient {...props} />;
};

export { FileMosaicContainer };
export default FileMosaicContainer;

import * as React from "react";
import { FileCard, FileMosaic, ExtFile } from "../../../files-ui";

const sampleFile: ExtFile = {
  size: 28 * 1024 * 1024,
  type: "video/mp4",
  name: "NarutoAndSasukevsMomoshiiki.mp4",
};

const VIDEO_URL = "/videodemo/NarutoEN.mp4";

const DemoDownloadSameOrigin = () => {
  return (
    <>
      <FileMosaic id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
      <FileCard id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
    </>
  );
};
export default DemoDownloadSameOrigin;

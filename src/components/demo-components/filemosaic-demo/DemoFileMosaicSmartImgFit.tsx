import * as React from "react";
import { ExtFile, FileCard, FileMosaic } from "../../../files-ui";

const DemoFileMosaicSmartImgFit = (props: { card: boolean }) => {
  if (props.card)
    return (
      <>
        <FileCard {...sampleFileProp} info smartImgFit={false} />
        <FileCard {...sampleFileProp} info smartImgFit={"orientation"} />
        <FileCard {...sampleFileProp} info smartImgFit={"center"} />
      </>
    );
  return (
    <>
      <FileMosaic {...sampleFileProp} info smartImgFit={false} />
      <FileMosaic {...sampleFileProp} info smartImgFit={"orientation"} />
      <FileMosaic {...sampleFileProp} info smartImgFit={"center"} />
    </>
  );
};
export default DemoFileMosaicSmartImgFit;

const sampleFileProp: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "Thor arrives wakanda.png",
  imageUrl: "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};

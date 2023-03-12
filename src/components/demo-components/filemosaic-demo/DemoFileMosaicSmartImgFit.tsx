import * as React from "react";
import { ExtFile, FileCard, FileMosaic } from "../../../files-ui";

const DemoFileMosaicSmartImgFit = (props: { card: boolean }) => {
  if (props.card)
    return (
      <>
        <FileCard {...landscapeImage} info smartImgFit={false} />
        <FileCard {...landscapeImage} info smartImgFit={"orientation"} />
        <FileCard {...landscapeImage} info smartImgFit={"center"} />
        <FileCard {...portraitImage} info smartImgFit={false} />
        <FileCard {...portraitImage} info smartImgFit={"orientation"} />
        <FileCard {...portraitImage} info smartImgFit={"center"} />
      </>
    );
  return (
    <>
      <FileMosaic {...landscapeImage} info smartImgFit={false} />
      <FileMosaic {...landscapeImage} info smartImgFit={"orientation"} />
      <FileMosaic {...landscapeImage} info smartImgFit={"center"} />
      <FileMosaic {...portraitImage} info smartImgFit={false} />
      <FileMosaic {...portraitImage} info smartImgFit={"orientation"} />
      <FileMosaic {...portraitImage} info smartImgFit={"center"} />
    </>
  );
};
export default DemoFileMosaicSmartImgFit;

const landscapeImage: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(landscape)Thor arrives wakanda.gif",
  imageUrl:
    "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};
const portraitImage: ExtFile = {
  id: "fileId-2",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(portrait)Iron man in stark tower.gif",
  imageUrl: "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};

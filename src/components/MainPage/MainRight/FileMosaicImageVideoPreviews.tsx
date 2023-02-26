import * as React from "react";
import { Stack, Paper } from "@mui/material";
import { FileMosaic } from "../../../files-ui/components/file-mosaic";
import { ExtFile } from "../../../files-ui/core";
import DescParagraph from "../../demo-components/desc-paragraph/DescParagraph";
import { FullScreen, ImagePreview, VideoPreview } from "../../../files-ui";

interface FileMosaicImageVideoPreviewsProps {
  darkMode?: boolean;
}
const FileMosaicImageVideoPreviews: React.FC<
  FileMosaicImageVideoPreviewsProps
> = (props: FileMosaicImageVideoPreviewsProps) => {
  const { darkMode } = props;
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);
  const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
    undefined
  );

  const handleSee = (imageSource: string | undefined) => {
    console.log("handleSee-imageSource", imageSource);
    setImageSrc(imageSource);
  };

  const handleWatch = (videoSource: File | string | undefined) => {
    console.log(
      "handleWatch videoSource",
      "https://files-ui-temp-storage.s3.amazonaws.com/2029385a4ed32ff10beeb94c0585e8ac1a8c377c68d22ef25ce5863694a5499e.mp4"
    );
    //setVideoSrc(videoSource);
   //
   setVideoSrc("https://files-ui-temp-storage.s3.amazonaws.com/2029385a4ed32ff10beeb94c0585e8ac1a8c377c68d22ef25ce5863694a5499e.mp4");
   // setVideoSrc("https://www.w3schools.com/tags/movie.mp4");
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>Or check the previews!</h3>
      <DescParagraph darkMode={darkMode}>
        Add more interacion in your webpage with a full screen preview of images
        or videos
      </DescParagraph>
      <Paper
        variant="outlined"
        sx={{
          padding: "20px 0",
          boxSizing: "border-box",
          backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-evenly"}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {files.map((f: ExtFile, index: number) => (
            <FileMosaic
              key={index}
              darkMode={darkMode}
              {...f}
              onSee={handleSee}
              onWatch={handleWatch}
              {...f.extraData}
              alwaysActive
            />
          ))}
          <FullScreen
            open={imageSrc !== undefined}
            onClose={() => setImageSrc(undefined)}
          >
            <ImagePreview src={imageSrc} />
          </FullScreen>
          <FullScreen
            open={videoSrc !== undefined}
            onClose={() => setVideoSrc(undefined)}
          >
            <VideoPreview videoSrc={videoSrc} autoPlay controls />
          </FullScreen>
        </Stack>
      </Paper>
    </div>
  );
};
export default FileMosaicImageVideoPreviews;

const files: ExtFile[] = [
  {
    id: 0,
    name: "image-preview.png",
    type: "image/png",
    size: 282000,
    imageUrl: "https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg",
  },

  {
    id: 2,
    name: "video-preview.mp4",
    type: "video/mp4",
    size: 282000,
    downloadUrl:
      "https://files-ui-temp-storage.s3.amazonaws.com/2029385a4ed32ff10beeb94c0585e8ac1a8c377c68d22ef25ce5863694a5499e.mp4",
  },
  {
    id: 3,
    name: "downloadable-file.png",
    type: "image/png",
    size: 282000,
    imageUrl: "/static/media/files-ui-logo-blue.e28c57506796630aebb5.png",
    downloadUrl: "/static/media/files-ui-logo-blue.e28c57506796630aebb5.png",
    extraData: {
      backgroundBlurImage: false,
    },
  },
  {
    id: 1,
    name: "ironman.png",
    type: "image/png",
    size: 282000,
    downloadUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",

    imageUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",
  },
];

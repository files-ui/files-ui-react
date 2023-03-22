import * as React from "react";
import { Stack, Paper } from "@mui/material";
import { FileMosaic, ExtFile, FileMosaicProps } from "../../../files-ui";
import DescParagraph from "../../demo-components/desc-paragraph/DescParagraph";
import { FullScreen, ImagePreview, VideoPreview } from "../../../files-ui";
import {
  // NarutoAndSasukeVsMomoshikiEN,
  // NarutoAndSasukeVsMomoshikiES,
  // ThorArrivesWakandaEN,
  ThorArrivesWakandaES,
} from "../../../data/videoLinks";

/* const VIDEO_URL =
  "https://srv23.y2mate.is/download?file=cd448fa7c7fe6c301970e890794fb682137140"; */
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
    console.log("handleWatch videoSource", videoSource);
    //setVideoSrc(videoSource);
    //
    setVideoSrc(videoSource);
    // setVideoSrc("https://www.w3schools.com/tags/movie.mp4");
  };
  const handleDownload = async (
    fileId: FileMosaicProps["id"],
    downloadUrl?: string
  ) => {
    
    console.log("Download fileId", fileId);
    console.log("Download fileName", files.filter((x) => x.id === fileId)[0]);
    console.log("Download downloadUrl", downloadUrl);
    if (!downloadUrl) return;
    try {
      const image = await fetch(downloadUrl);
      const imageBlob = await image.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const anchor = document.createElement("a");
      anchor.href = imageURL;
      anchor.download = "fileName.jpg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(imageURL);
      /*  const resJson = await response.json();
      console.log("Download", resJson); */
    } catch (error) {
      console.log("Download error", error);
      console.error(error);
    }
  };
/*   const handleDownloadXHR = async (
    fileId: FileMosaicProps["id"],
    downloadUrl?: string
  ) => {
    console.log("Download fileId", fileId);
    console.log(
      "Download fileName",
      files.filter((x) => x.id === fileId)[0].name
    );
    console.log("Download downloadUrl", downloadUrl);
    if (!downloadUrl) return;
    try {
      const request = new XMLHttpRequest();
      request.responseType = "blob";
      request.open("get", downloadUrl, true);
      request.send();

      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const imageURL = window.URL.createObjectURL(this.response);

          const anchor = document.createElement("a");
          anchor.href = imageURL;
          anchor.download = "fileNamess.jpg";
          document.body.appendChild(anchor);
          anchor.click();
        } else {
          console.log("not yet");
        }
      };

      const image = await fetch(downloadUrl);
      const imageBlob = await image.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const anchor = document.createElement("a");
      anchor.href = imageURL;
      anchor.download = "fileName.jpg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(imageURL);
      // const resJson = await response.json();
      //console.log("Download", resJson); 
    } catch (error) {
      console.log("Download error", error);
    }
  }; */
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
              onDownload={f.downloadUrl ? handleDownload : undefined}
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
            <VideoPreview src={videoSrc} autoPlay controls />
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
    name: "mark45.jpg",
    type: "image/jpeg",
    size: 282000,
    imageUrl: "https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg",
    //downloadUrl: "https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg",
  },

  {
    id: 1,
    name: "ThorArrivesWakandaES.mp4",
    type: "video/mp4",
    size: 282000,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/626/685/desktop-wallpaper-avengers-infinity-war-thor-arrives-in-wakanda-bring-me-thanos.jpg",
    downloadUrl: ThorArrivesWakandaES,
    videoUrl: ThorArrivesWakandaES ,
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
    name: "facebook logo.png",
    type: "image/png",
    size: 282000,
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png",
    extraData: {
      backgroundBlurImage: false,
    },
  },
];
/* 
const videos: ExtFile[] = [
  {
    id: 0,
    name: "ThorArrivesWakandaEN.mp4",
    type: "video/mp4",
    size: 282000,
    downloadUrl: ThorArrivesWakandaEN,
    extraData: { videoUrl: ThorArrivesWakandaEN },
  },
  {
    id: 1,
    name: "ThorArrivesWakandaES.mp4",
    type: "video/mp4",
    size: 282000,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/626/685/desktop-wallpaper-avengers-infinity-war-thor-arrives-in-wakanda-bring-me-thanos.jpg",
    downloadUrl: ThorArrivesWakandaES,
    extraData: { videoUrl: ThorArrivesWakandaES },
  },

  {
    id: 1,
    name: "NarutoAndSasukeVsMomoshikiEN.mp4",
    type: "video/mp4",
    size: 282000,
    downloadUrl: NarutoAndSasukeVsMomoshikiEN,
    extraData: { videoUrl: NarutoAndSasukeVsMomoshikiEN },
  },
  {
    id: 1,
    name: "NarutoAndSasukeVsMomoshikiES.mp4",
    type: "video/mp4",
    size: 282000,
    downloadUrl: NarutoAndSasukeVsMomoshikiES,
    extraData: { videoUrl: NarutoAndSasukeVsMomoshikiES },
  },
];
 */

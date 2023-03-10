import * as React from "react";
import { VideoPreviewProps } from "./VideoPreviewProps";

const VideoPreview: React.FC<VideoPreviewProps> = (
  props: VideoPreviewProps
) => {
  const {
    src: videoSrc,
    /* autoPlay, controls,  */ style,
    className,
    ...others
  } = props;

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [source, setSource] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    //if not undefined
    if (!videoSrc) {
      return;
    }

    if (typeof videoSrc === "string") {
      //if a url string is given, assign it directly
      setSource(videoSrc);
    } else {
      //if a File object is given, check if is a supported format
      const headerMime = videoSrc.type ? videoSrc.type.split("/")[0] : "octet";
      const tailMime = videoSrc.type ? videoSrc.type.split("/")[1] : "octet";

      if (headerMime === "video" && ["mp4", "ogg", "webm"].includes(tailMime)) {
        //set the video source and create the uri string if is a supported video format
        const newVideoSrc = URL.createObjectURL(videoSrc);
        setSource(newVideoSrc);
      }
    }
  }, [videoSrc]);
  React.useEffect(() => {
    if (source && videoRef.current) {
      videoRef.current.load();
    }
  }, [source]);

  return (
    <React.Fragment>
      {videoSrc && source && (
        <video
          onClick={(evt) => {
            evt.preventDefault();
          }}
          //onLoadedMetadata={handleLoaded}
          id="files-ui-video"
          //controls={controls}
          ref={videoRef}
          className={className || "dui-video-preview"}
          //autoPlay={autoplay}
          src={source}
          //width={"100%"}
          height={"100%"}
          style={style}
          {...others}
        >
          <source type="video/webm" />
          <source type="video/ogg" />
          <source type="video/mp4" />
        </video>
      )}
    </React.Fragment>
  );
};
export default VideoPreview;

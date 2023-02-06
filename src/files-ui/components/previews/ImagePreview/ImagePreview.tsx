import * as React from "react";
import {
  ImagePreviewDefaultProps,
  ImagePreviewProps,
} from "./ImagePreviewProps";
import { mergeProps } from "../../overridable";
import { getImageOrientation, readAsDataURL } from "../../../core";

import "./ImagePreview.scss";

const ImagePreview: React.FC<ImagePreviewProps> = (
  props: ImagePreviewProps
) => {
  const { src, alt, className, style, width, height, onError } = mergeProps(
    props,
    ImagePreviewDefaultProps
  );

  //console.table({ src, alt, className, style, width, height });
  const [source, setSource] = React.useState<string | undefined>(undefined);
  const [orientation, setOrientation] = React.useState<
    "landscape" | "portrait" | undefined
  >(undefined);

  const getSource = async (src: File): Promise<void> => {
    const newImageSrc: string | undefined = await readAsDataURL(src);
    handleSetStrSource(newImageSrc);
  };
  const handleSetStrSource = async (imageSource: string | undefined) => {
    if (imageSource) {
      const orientation: "landscape" | "portrait" = await getImageOrientation(
        imageSource
      );
      setOrientation(orientation);
    }
    setSource(imageSource);
  };
  React.useEffect(() => {
    //if not undefined
    if (!src) {
      return;
    }
    //console.log("ImagePreview There is source :D");

    if (typeof src === "string") {
      //if a url string is given, assign it directly
      handleSetStrSource(src);
    } else {
      //if a File object is given, check if is a supported format and read it
      const headerMime = src.type ? src.type.split("/")[0] : "octet";

      if (headerMime === "image") {
        //set the video source and create the uri string if is a supported video format
        getSource(src);
      }
    }
  }, [src]);
  //console.log("ImagePreview", src, source);

  const finalWidth: string | number | undefined =
    width || (orientation === "landscape" ? "100%" : undefined);
  const finalHeight: string | number | undefined =
    height || (orientation === "portrait" ? "100%" : undefined);
    
    const handleError=(evt: React.SyntheticEvent<HTMLImageElement, Event>)=>{
      console.log("handleError", onError);
      onError?.(evt);
    }
  return (
    <React.Fragment>
      {src && source && (
        <img
          style={style || {}}
          onClick={(evt) => {
            evt.preventDefault();
          }}
          width={finalWidth}
          height={finalHeight}
          src={source}
          alt={alt}
          className={className}
          onError={handleError}
        />
      )}
    </React.Fragment>
  );
};
export default ImagePreview;

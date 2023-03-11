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
  const {
    src,
    alt,
    className,
    style,
    width,
    height,
    onError,
    smart,
    smartImgFit,
  } = mergeProps(props, ImagePreviewDefaultProps);

  const [[finalHeight, finalWidth], setfinalDimensions] = React.useState<
    [number | undefined, number | undefined]
  >([undefined, undefined]);

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
    if (imageSource === "" || !imageSource) return;

    setSource(imageSource);

    let finalHeight = undefined;
    let finalWidth = undefined;

    if (!smartImgFit) {
      //if not given
      finalWidth = 100;
    } else {
      const orientation: "landscape" | "portrait" = await getImageOrientation(
        imageSource
      );
      if (orientation === "landscape") {
        if (smartImgFit === "orientation") {
          finalHeight = undefined;
          finalWidth = 100;
        } else {
          finalHeight = 100;
          finalWidth = undefined;
        }
      } else {
        if (smartImgFit === "center") {
          finalHeight = undefined;
          finalWidth = 100;
        } else {
          finalHeight = 100;
          finalWidth = undefined;
        }
      }
    }

    setfinalDimensions([finalHeight, finalWidth]);
    setSource(imageSource);
  };

  React.useEffect(() => {
    //if not undefined
    if (!src) return;
    //console.log("ImagePreview There is source :D");

    if (typeof src === "string") {
      //if a url string is given, assign it directly
      handleSetStrSource(src);
    } else {
      //if a File object is given, check if is a supported format and read it
      const headerMime = src.type ? src.type.split("/")[0] : "octet";
      if (headerMime === "image")
        //set the image source and create the uri string if it's a supported image format
        getSource(src);
    }
    // eslint-disable-next-line
  }, [src]);
  //console.log("ImagePreview", src, source);

  /* const finalWidth: string | number | undefined =
    width || (orientation === "landscape" && smart ? "100%" : undefined);
  const finalHeight: string | number | undefined =
    height || (orientation === "portrait" && smart ? "100%" : undefined); */

  console.log("Image result", finalHeight, finalWidth, orientation, smart);
  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("handleError", onError);
    onError?.(evt);
  };

  return (
    <React.Fragment>
      {src && source && (finalHeight || finalWidth) && (
        <img
          style={style || {}}
          onClick={(evt) => {
            evt.preventDefault();
          }}
          width={finalWidth?`${finalWidth}%`:finalWidth}
          height={finalHeight?`${finalHeight}%`:finalHeight}
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

import * as React from "react";
import {
  ImagePreviewDefaultProps,
  ImagePreviewProps,
} from "./ImagePreviewProps";
import { mergeProps } from "../overridable";
import { getImageOrientation, readAsDataURL } from "../core";

import "./ImagePreview.scss";

const ImagePreview: React.FC<ImagePreviewProps> = (
  props: ImagePreviewProps
) => {
  const {
    src,
    alt,
    width,
    height,
    onError,
    //smart,
    smartImgFit,
    style,
    className,
  } = mergeProps(props, ImagePreviewDefaultProps);
console.log("ImagePreview smartImgFit",smartImgFit);
  const [[finalHeight, finalWidth], setfinalDimensions] = React.useState<
    [number | string | undefined, number | string | undefined]
  >([undefined, undefined]);

  //console.table({ src, alt, className, style, width, height });
  const [source, setSource] = React.useState<string | undefined>(undefined);
  /*  const [orientation, setOrientation] = React.useState<
    "landscape" | "portrait" | undefined
  >(undefined); */

  const getSource = async (src: File): Promise<void> => {
    const newImageSrc: string | undefined = await readAsDataURL(src);
    handleSetStrSource(newImageSrc);
  };

  const handleSetStrSource = async (imageSource: string | undefined) => {
    console.log("handleSetStrSource", imageSource);
    if (imageSource === "" || !imageSource) {
      console.log("handleSetStrSource return", imageSource);

      return;
    }

    //setSource(imageSource);

    let finalHeight = undefined;
    let finalWidth = undefined;

    if (!smartImgFit) {
      console.log("handleSetStrSource no imgfit", imageSource);

      //if not given
      finalWidth = "100%";
    } else {
      console.log("handleSetStrSource yes imgfit", smartImgFit, imageSource);

      try {
        const orientation: "landscape" | "portrait" = await getImageOrientation(
          imageSource
        );

        console.log("handleSetStrSource orientation obtained", orientation);
        if (orientation === "landscape") {
          if (smartImgFit === "orientation") {
            finalHeight = undefined;
            finalWidth = "100%";
          } else {
            finalHeight = "100%";
            finalWidth = undefined;
          }
        } else {
          if (smartImgFit === "center") {
            finalHeight = undefined;
            finalWidth = "100%";
          } else {
            finalHeight = "100%";
            finalWidth = undefined;
          }
        }
      } catch (error) {
        onError?.();
      }
    }
    if (height) finalHeight = height;
    if (width) finalWidth = width;

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
      if (headerMime === "image") {
        //set the image source and create the uri string if it's a supported image format
        getSource(src);
        //if not image
      }else{
        onError?.();
      }
    }
    // eslint-disable-next-line
  }, [src]);
  //console.log("ImagePreview", src, source);

  /* const finalWidth: string | number | undefined =
    width || (orientation === "landscape" && smart ? "100%" : undefined);
  const finalHeight: string | number | undefined =
    height || (orientation === "portrait" && smart ? "100%" : undefined); */

  console.log("Image result", src, source, finalHeight, finalWidth);
  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("handleError", onError);
    onError?.();
  };

  return (
    <React.Fragment>
      {src && source && (finalHeight || finalWidth) && (
        <img
          //onLoad={handleLoad}
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

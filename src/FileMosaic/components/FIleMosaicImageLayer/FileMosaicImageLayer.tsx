import * as React from "react";
import ImagePreview from "../../../ImagePreview/ImagePreview";

interface FileMosaicImageLayerProps {
  /**
   * The image source
   */
  imageSource: string | undefined;
  /**
   * the url file icon
   */
  url: string;
  /**
   * The name to be used as alt
   */
  fileName: string;

  /**
   *
   */
  card?: boolean;
  /**
   *
   */
  isBlur?: boolean;
  /**
   * If not present, image width will be set to 100%.
   *
   * If present, image will be analized and displayed according to its heigh and width.
   * Image with height greater than its width has a "portrait" orientation.
   * Otherwise it has a "landscape" orientation.
   * - If value is "orientation", image will be displayed complete by giving 100%
   * to width prop if the orientation is "landscape".
   * When orientation is "portrait", height prop will be set to 100%. Some images
   * will show an empty space.
   * - If value is "center", image will be centered and will not be displayed complete.
   * This the empty space is avoided. This is achived by giving 100% to width prop if
   * the orientation is "portrait". When orientation is "landscape", height prop will be set to 100%.
   * @default orientation
   */
  smartImgFit?: false | "orientation" | "center";
}
const FileMosaicImageLayer: React.FC<FileMosaicImageLayerProps> = (
  props: FileMosaicImageLayerProps
) => {
  ////console.log("FileMosaicImageLayer", props);
  const { imageSource, url, fileName, card, isBlur,smartImgFit } = props;

  const [localSource, setLocalSource] = React.useState<string | undefined>(
    undefined
  );
  const [error, setError] = React.useState<boolean>(false);

  //assign to localSource the imageSource or the url of the ile type
  React.useEffect(() => {
    setLocalSource(imageSource || url);
  }, [imageSource, url]);

  /**
   * When an error occurs when setting the source, the url will be used instead.
   * The url always is a valid image url
   */
  const handleError = () => {
    setError(true);
    setLocalSource(url);
    //console.log("FileMosaicImageLayer error", url);
  };

  //If blur is true
  if (isBlur) {
    return (
      <React.Fragment>
        {/** If it is not card, there isn't an error  and there is an imageSource*/}
        {!card && !error && imageSource && (
          <ImagePreview
            src={localSource}
            alt={`blur ${fileName}`}
            smartImgFit={false}
          />
        )}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <ImagePreview
        onError={handleError}
        src={localSource}
        style={{ borderRadius: "0px" }}
        alt={`preview ${fileName}`}
        smartImgFit={smartImgFit}
      />
    </React.Fragment>
  );
};
export default FileMosaicImageLayer;

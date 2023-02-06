import * as React from "react";
import { ImagePreview } from "../../../previews";
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
}
const FileMosaicImageLayer: React.FC<FileMosaicImageLayerProps> = (
  props: FileMosaicImageLayerProps
) => {
  //console.log("FileMosaicImageLayer", props);
  const { imageSource, url, fileName, card, isBlur } = props;

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
    console.log("FileMosaicImageLayer error", url);
  };

  //If blur is true
  if (isBlur) {
    return (
      <React.Fragment>
        {/** If it is not card, there isn't an error  and there is an imageSource*/}
        {!card && !error && imageSource && (
          <ImagePreview src={localSource} alt={`blur ${fileName}`} />
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
      />
    </React.Fragment>
  );
};
export default FileMosaicImageLayer;

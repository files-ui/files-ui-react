import * as React from "react";
import { ImagePreview } from "../../../previews";
import "./FileItemImage.scss";
export interface FileItemImageProps {
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
   * Flag that indicates whether to show a background blur image or not
   */
  backgroundBlurImage: boolean;
  /**
   *
   */
  card?: boolean;
}

const FileItemImage: React.FC<FileItemImageProps> = (
  props: FileItemImageProps
) => {
  const { imageSource, url, fileName, backgroundBlurImage, card } = props;
  const [source, setSource] = React.useState<string | undefined>(undefined);
  const [error, setError] = React.useState<boolean>(false);
  React.useEffect(() => {
    setSource(imageSource || url);
  }, [imageSource, url]);
  const handleError = () => {
    setError(true);
    setSource(url);
  };
  return (
    <React.Fragment>
      {!card && backgroundBlurImage && imageSource && !error && (
        <div className="fui-img-container blur">
          <ImagePreview src={imageSource} alt={`blur ${fileName}`} />
        </div>
      )} 
      <div className={!card ? "fui-img-container" : "fui-img-container card"}>
        <ImagePreview
          onError={handleError}
          src={source}
          style={{ borderRadius: "0px" }}
          alt={`preview ${fileName}`}
        />
      </div>
    </React.Fragment>
  );
};
export default FileItemImage;

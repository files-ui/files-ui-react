import * as React from "react";
import { ImagePreview } from "../../../previews";
import "./FileItemImageNeo.scss";
export interface FileItemImageNeoProps {
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
}

const FileItemImageNeo: React.FC<FileItemImageNeoProps> = (
  props: FileItemImageNeoProps
) => {
  const { imageSource, url, fileName } = props;
  return (
    <React.Fragment>
      {imageSource && (
        <div className="dui-img-container blur">
          <ImagePreview
            //className="dui-img-container blur"

            src={imageSource}
            alt={`blur ${fileName}`}
          />
        </div>
      )}
      <div className="dui-img-container">
        <ImagePreview
          // className="dui-img-container"
          src={imageSource || url}
          style={{ borderRadius: "0px" }}
          alt={`preview ${fileName}`}
        />
      </div>
    </React.Fragment>
  );
};
export default FileItemImageNeo;

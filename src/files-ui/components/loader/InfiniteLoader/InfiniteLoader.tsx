import * as React from "react";
import { Clear } from "../../icons";
import BasePreparingLoader from "../BasePreparingLoader/BasePreparingLoader";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import { InfiniteLoaderProps } from "./InfiniteLoaderProps";

const InfiniteLoader: React.FC<InfiniteLoaderProps> = (
  props: InfiniteLoaderProps
) => {
  const {
    onClick,
    //text,
    size,
  } = props;
  return (
    <LoaderContainer onClick={onClick} size={size}>
      <>
        <BasePreparingLoader size={size} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {onClick && (
            <Clear
              color={"rgba(255,255,255,0.75)"}
              size={45}
              onClick={onClick}
              //colorFill="transparent"
            />
          )}
        </div>
      </>
    </LoaderContainer>
  );
};
export default InfiniteLoader;

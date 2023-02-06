import * as React from "react";
import { LoaderContainerProps } from "./LoaderContainerProps";
import "./LoaderContainer.scss";
import { parseSize } from "../../icons/utils/utils";
const LoaderContainer: React.FC<LoaderContainerProps> = (
  props: LoaderContainerProps
) => {
  const { children, className, style, size, onClick } = props;
  const finalSize = size ? parseSize(size) : undefined;
  //const isClickable = onClick !== undefined;
  const finalClassName: string = onClick
    ? "files-ui-loader-container clickable"
    : "files-ui-loader-container";

  const handleClick = () => {
    onClick?.();
  };
  return (
    <div
      onClick={handleClick}
      className={className ? `${finalClassName} ${className}` : finalClassName}
      style={{ ...style, height: finalSize, width: finalSize }}
    >
      {children}
    </div>
  );
};
export default LoaderContainer;

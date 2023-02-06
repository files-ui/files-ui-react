import * as React from "react";
import { handleClickUtil, handleDragUtil } from "../../../../core";
import "./DropzoneDisabledLayer.scss";
export declare type DropzoneDisabledLayerProps = {
  open?: boolean;
};
const DropzoneDisabledLayer: React.FC<DropzoneDisabledLayerProps> = (
  props: DropzoneDisabledLayerProps
) => {
  const { open } = props;
  function handleClick<T extends HTMLDivElement>(
    evt: React.MouseEvent<T, MouseEvent>
  ): void {
    handleClickUtil(evt);
  }
  const handleDrag: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>
  ) => {
    handleDragUtil(evt);
  };
  if (open) {
    return (
      <div
        className="dropzone-ui-disabled-root"
        onDrop={handleDrag}
        onDrag={handleDrag}
        onClick={handleClick}
      ></div>
    );
  } else {
    return <></>;
  }
};
export default DropzoneDisabledLayer;

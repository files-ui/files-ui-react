import * as React from "react";
import {
  addClassName,
} from "theamazingunkowntext"
import {
  handleClickUtil,
  handleDragUtil,
  handleDropUtil,
} from "../../../utils";
import "./DropzoneDisabledLayer.scss";
export declare type DropzoneDisabledLayerProps = {
  open?: boolean;
  className?: string;
  style?: React.CSSProperties;
  //TO-DO: aloow to se a custom children
  //for disabled layer and also drop layer
};
const DropzoneDisabledLayer: React.FC<DropzoneDisabledLayerProps> = (
  props: DropzoneDisabledLayerProps
) => {
  const { open, className, style } = props;

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

  const handleDrop: React.DragEventHandler<HTMLDivElement> = async (
    evt: React.DragEvent<HTMLDivElement>
  ): Promise<void> => {
    handleDropUtil(evt);
  };
  const finalDisabledLayerClassName: string = addClassName(
    "filesui-disabled-root",
    className
  );
  if (open) {
    return (
      <div
        style={style}
        className={finalDisabledLayerClassName}
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onClick={handleClick}
      ></div>
    );
  } else {
    return <></>;
  }
};
export default DropzoneDisabledLayer;

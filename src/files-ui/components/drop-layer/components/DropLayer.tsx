import * as React from "react";
import { DropLayerProps } from "./DropLayerProps";

const DropLayer: React.FC<DropLayerProps> = (props: DropLayerProps) => {
  const { onDrop, onDragLeave, className: classNameLayer, open, style } = props;
  //console.log("DropLayer", classNameLayer);

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    //console.log("Drag ended");
    onDragLeave?.(evt);
  };

  return (
    <div
      className={classNameLayer}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      //onDragEnd={onDragEnd}
      style={style || { display: open ? undefined : "none" }}
    ></div>
  );
};
export default DropLayer;

import * as React from "react";
import { addClassName } from "../../../../core";
import { OverridableComponentProps } from "../../../overridable";
import "./Layer.scss";

interface LayerProps extends OverridableComponentProps {
  visible?: boolean;
}

const Layer: React.FC<LayerProps> = (props: LayerProps) => {
  const { style, className, children, visible } = props;
  const finalClassName: string = addClassName(
    className || "",
    "files-ui-layer"
  );
  if (visible)
    return (
      <div className={finalClassName} style={style}>
        {children}
      </div>
    );
  else return <></>;
};
export default Layer;

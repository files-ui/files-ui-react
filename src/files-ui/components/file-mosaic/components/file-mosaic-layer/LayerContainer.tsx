import * as React from "react";
import { addClassName } from "../../../../core";
import { OverridableComponentProps } from "../../../overridable";
import "./LayerContainer.scss";

interface LayerContainerPropMap extends OverridableComponentProps {}

interface LayerDivProps extends React.HTMLProps<HTMLDivElement> {}

export type LayerContainerProps = {
  [F in keyof LayerDivProps]: LayerDivProps[F];
} & {
  [F in keyof LayerContainerPropMap]: LayerContainerPropMap[F];
};

const LayerContainer: React.FC<LayerContainerProps> = (
  props: LayerContainerProps
) => {
  const { style, className, children } = props;
  const finalClassName: string = addClassName(
    className || "",
    "files-ui-layer-container"
  );

  return (
    <div className={finalClassName} style={style}>
      {children}
    </div>
  );
};
export default LayerContainer;

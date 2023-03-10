import * as React from "react";
import { addClassName } from "../../../../core";
import { OverridableComponentProps } from "../../../overridable";
import "./Layer.scss";

interface LayerPropsMap extends OverridableComponentProps {
  visible?: boolean;
}
type DefDivProps = React.HTMLProps<HTMLDivElement>;
type DivPropsOmitInputButtonFullProps = Omit<DefDivProps,  keyof LayerPropsMap>;

type LayerProps = DivPropsOmitInputButtonFullProps & {
  [D in keyof LayerPropsMap]: LayerPropsMap[D];
};

const Layer: React.FC<LayerProps> = (props: LayerProps) => {
  const { style, className, children, visible, ...otherProps } = props;
  const finalClassName: string = addClassName(
    className || "",
    "files-ui-layer"
  );
  if (visible)
    return (
      <div className={finalClassName} style={style} {...otherProps}>
        {children}
      </div>
    );
  else return <></>;
};
export default Layer;

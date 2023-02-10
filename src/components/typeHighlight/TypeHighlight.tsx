import * as React from "react";
import "./TypeHighlight.scss";

interface TypeHighlightProps {
  children?: React.ReactNode;
  np?:boolean;
}
const TypeHighlight: React.FC<TypeHighlightProps> = (
  props: TypeHighlightProps
) => {
  const { children,np } = props;
  return <div className={np?"type-highlight np":"type-highlight"}>{children}</div>;
};
export default TypeHighlight;

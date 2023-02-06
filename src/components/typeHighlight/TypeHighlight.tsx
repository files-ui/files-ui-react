import * as React from "react";
import "./TypeHighlight.scss";

interface TypeHighlightProps {
  children?: React.ReactNode;
}
const TypeHighlight: React.FC<TypeHighlightProps> = (
  props: TypeHighlightProps
) => {
  const { children } = props;
  return <div className="type-highlight">{children}</div>;
};
export default TypeHighlight;

import * as React from "react";
import "./TypeHighlight.scss";

interface TypeHighlightProps {
  children?: React.ReactNode;
  np?: boolean;
  size?: string;
}
const TypeHighlight: React.FC<TypeHighlightProps> = (
  props: TypeHighlightProps
) => {
  const { children, np, size } = props;
  return (
    <div
      className={np ? "type-highlight np" : "type-highlight"}
      style={{ fontSize: size }}
    >
      {children}
    </div>
  );
};
export default TypeHighlight;

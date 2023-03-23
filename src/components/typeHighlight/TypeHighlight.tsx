import * as React from "react";
import { UserContext } from "../../globals/contexts/UserContext";
import "./TypeHighlight.scss";

interface TypeHighlightProps {
  children?: React.ReactNode;
  np?: boolean;
  size?: string;
  darkMode?: boolean;
}
const TypeHighlight: React.FC<TypeHighlightProps> = (
  props: TypeHighlightProps
) => {
  const { children, np, size } = props;
  const [usuario, dispatch] = React.useContext(UserContext);
  const darkMode = usuario.darkMode;
  const finaldarkmodeclassName = !darkMode
    ? "type-highlight"
    : "type-highlight darkmode";
  const finalNpclassName = np
    ? `${finaldarkmodeclassName} np`
    : finaldarkmodeclassName;

  return (
    <div className={finalNpclassName} style={{ fontSize: size }}>
      {children}
    </div>
  );
};
export default TypeHighlight;

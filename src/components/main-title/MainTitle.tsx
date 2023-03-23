import * as React from "react";
import { UserContext } from "../../globals/contexts/UserContext";
interface MainTitleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
const MainTitle: React.FC<MainTitleProps> = (props: MainTitleProps) => {
  const { children, className, style } = props;
  const [usuario, ] = React.useContext(UserContext);

  // const [darkModeOn, setDarkModeOn] = React.useState(false);
  const darkMode = usuario.darkMode;
  return (
    <h1
      style={{
        fontSize: "2.25rem",
        letterSpacing: "0.2px",
        lineHeight: "1.22222",
        color: darkMode ? "rgba(255, 255, 255, 0.7)" : "#0a1929",
        wordBreak: "break-word",
        ...style,
      }}
      className={className}
    >
      {children}
    </h1>
  );
};
export default MainTitle;

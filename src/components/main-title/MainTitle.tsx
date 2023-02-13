import * as React from "react";
interface MainTitleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
const MainTitle: React.FC<MainTitleProps> = (props: MainTitleProps) => {
  const { children, className, style } = props;
  return (
    <h1
      style={{
        fontSize: "2.25rem",
        letterSpacing: "0.2px",
        lineHeight: "1.22222",
        color: "#0a1929",
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

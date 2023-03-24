import * as React from "react";
interface EmptyStatusProps {
  height?: string | number;
}
const EmptyStatus: React.FC<EmptyStatusProps> = (props: EmptyStatusProps) => {
  const { height } = props;
  const finalHeight: string = !height
    ? "132px"
    : typeof height === "number"
    ? `${height}px`
    : height;
  return (
    <React.Fragment>
      <div style={{ width: "100%", height: finalHeight }}>
        {/*  <span> EMPTY </span> */}
      </div>
    </React.Fragment>
  );
};
export default EmptyStatus;

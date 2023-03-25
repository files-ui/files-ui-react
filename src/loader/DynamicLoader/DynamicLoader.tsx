import * as React from "react";
import { Clear } from "../../icons";
import { parseSize } from "../../icons/utils/utils";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import { DynamicLoaderProps } from "./DynamicLoaderProps";
import "./DynamicLoader.scss";
const DynamicLoader: React.FC<DynamicLoaderProps> = (
  props: DynamicLoaderProps
) => {
  const {
    size,
    color,
    //colorFill,
    //onClick,
    style,
    //className,
    percentage,
    hidePerncentage,
    radius,
    x,
    y,
    width,
    onClick,
  } = props;

  //console.table(props);
  ////console.log("percentage", percentage);

  const finalRadius = radius || 28;
  const finalX = x || 30;
  const finalY = y || 30;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};

  const circleRef: React.RefObject<SVGCircleElement> =
    React.useRef<SVGCircleElement>(null);

  function setProgress(
    percent: number,
    myCircle: SVGCircleElement,
    circumference: number
  ) {
    myCircle.style.strokeDashoffset = `${circumference * (1 - percent / 100)}`;

    //myCircle.style.strokeDashoffset = `0`;
    /* let pct = document.getElementById("pct");
    pct.innerHTML = percent.toFixed(0) + "%"; */
  }
  React.useEffect(() => {
    const myCircle: SVGCircleElement | null = circleRef.current;
    //console.log("percentage useEffect", percentage);

    if (
      myCircle !== null &&
      myCircle !== undefined &&
      percentage !== undefined
    ) {
      let circumference: number = 2 * Math.PI * myCircle.r.baseVal.value;

      myCircle.style.strokeDasharray = `${circumference} 1000`;

      setProgress(
        percentage >= 100 ? 100 : percentage,
        myCircle,
        circumference
      );
    }
  }, [percentage]);

  if (percentage !== undefined)
    return (
      <LoaderContainer size={size}>
        <>
          <svg
            className="dui_svg_circle_loader"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={`${finalSize}px`}
            height={`${finalSize}px`}
            style={finalStyle}
          >
            <circle
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
              stroke={color || "#14ff00"}
              cx={`${finalX}`}
              cy={`${finalY}`}
              r={`${finalRadius}`}
              strokeWidth={`${width || 8}px`}
              //className="circle_loader"
              id="circle"
              ref={circleRef}
              fill="none"
            ></circle>

            {!hidePerncentage && percentage !== undefined && (
              <text
                className="files-ui-text-dynamic-loader"
                x={`${finalX}`}
                y={`${(finalX * 7) / 6}`}
              >
                {`${percentage.toFixed(0)} %`}
              </text>
            )}
          </svg>
          {onClick && (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Clear
                color={"rgba(255,255,255,0.75)"}
                size={45}
                onClick={onClick}
                //colorFill="transparent"
              />
            </div>
          )}
        </>
      </LoaderContainer>
    );
  else {
    return <></>;
  }
};
export default DynamicLoader;

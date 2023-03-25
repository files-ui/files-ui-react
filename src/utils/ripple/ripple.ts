import * as React from "react";
import { completeAsureColor, hexColorToRGB } from "theamazingunkowntext"

const asureRippleColor = (color: string): string => {
  return completeAsureColor(color,
    0.4
  );
}


export function createFuiRippleFromDiv
  <T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>
  (
    fuiContainerAbs: T | null,
    fuiContainerRel: T | null,
    color: string
  ) {
  if (!fuiContainerRel || !fuiContainerAbs) return;

  fuiContainerAbs.style.display = "block";
  //removeRippleIfExist(fuiContainerRel, "dui-ripple");
  // creating the span circle ripple
  const circle: HTMLSpanElement = document.createElement("span");
  //for searching
  circle.id = "filesui-ripple";
  //for styles
  circle.className = "ripple";
  // calculates the diameter
  const diameter: number = Math.max(
    fuiContainerRel.clientWidth,
    fuiContainerRel.clientHeight
  );

  //const rippleCircleRadius: number = diameter / 2;

  //console.log("w,h", fuiContainerRel.clientWidth, fuiContainerRel.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.backgroundColor = asureRippleColor(color);

  fuiContainerRel.appendChild(circle);
  //remove trash
  setTimeout(() => {
    fuiContainerAbs.style.display = "none";
    circle?.remove();
  }, 501);
}


export function createRippleButton<
  T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
>(event: React.MouseEvent<T, MouseEvent>, variant: string, color: string) {
  const buttonAnchorDiv = event.currentTarget;

  const circle: HTMLSpanElement = document.createElement("span");

  const diameter = Math.max(
    buttonAnchorDiv.clientWidth,
    buttonAnchorDiv.clientHeight
  );
  //const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  /* circle.style.left = `${event.clientX - radius
   }px`;
 circle.style.top = `${event.clientY - radius
   }px`; */

  circle.classList.add("ripple");

  if (variant !== "contained") {
    circle.style.backgroundColor = asureRippleColor(color);
  } else {

    circle.style.backgroundColor = hexColorToRGB("#ffffff", 0.4);
  }
  buttonAnchorDiv.appendChild(circle);

  setTimeout(() => {
    circle?.remove();
  }, 501);
}
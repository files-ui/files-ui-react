import * as React from "react";
import useMaterialButtonClassName from "./hooks/useMaterialButtonClassName";
import { MaterialButtonProps } from "./MaterialButtonProps";
import "./MaterialButton.scss";
import { createRippleButton } from "../../core";


const MaterialButton: React.FC<MaterialButtonProps> = (
  props: MaterialButtonProps
) => {
  const {
    disabled,
    href,
    textTransform:textDecoration,
    variant = "contained",
    color = "#1976d2",
    textColor ="white",
    children,
    className,
    style,
    onClick,
    resetStyles,
  } = props;

  const idClassName = React.useId();

  const materialButtonClassName: string | undefined =
    useMaterialButtonClassName(
      variant,
      disabled,
      color,
      textColor,
      textDecoration,
      className,
      idClassName.replaceAll(":",""),
      resetStyles
    );

  function handleClick<T extends HTMLAnchorElement | HTMLButtonElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    e.preventDefault();
  

    //ripple
    createRippleButton(e, variant as string, color as string);

    onClick?.(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
  }

  if (materialButtonClassName!==undefined || resetStyles)
    return React.createElement(href ? "a" : "button", {
      className: resetStyles && className ? className : materialButtonClassName,
      "data-testid": href ? "dui-anchor" : "dui-button",
      onClick: handleClick,
      href: href,
      style: style,
      children: <span className="material-button-label">{children}</span>,
      disabled: disabled,
    });
  else return <React.Fragment>loading styes</React.Fragment>;
};
export default MaterialButton;

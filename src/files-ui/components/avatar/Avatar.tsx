import * as React from "react";
import { mergeProps } from "../overridable/mergeProps";
import { AvatarProps, defaultAvatarProps } from "./AvatarProps";
import "./Avatar.scss";
import {
  setAvatarClassNameContainer,
  setAvatarClassNameLayerInfo,
} from "./useAvatarClassName";
import InputHidden from "../input-hidden/InputHidden";
import { useAvatarStyle } from "./useAvatarStyle";
import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    style,
    src,
    onChange,
    alt,
    emptyLabel,
    changeLabel,
    readOnly,
    variant,
    borderRadius,
    onError,
  } = mergeProps(props, defaultAvatarProps);

  const inputRef: React.RefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null);

  const isStyleInjected: boolean = useAvatarStyle(borderRadius);

  const avatarClassNameContainer: string = setAvatarClassNameContainer(variant);
  const avatarClassNameLayerInfo: string = setAvatarClassNameLayerInfo(variant);

  const handleClick = () => {
    // alert("Agregar fotooooooo");
    inputRef.current?.click();
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let fileList: FileList = evt.target.files as FileList;

    let fileListOutput = [];
    for (let i = 0, f; (f = fileList[i]); i++) {
      fileListOutput.push(f);
    }
    onChange?.(fileListOutput[0]);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (
    evt: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    onError?.(evt);
  };

  if (isStyleInjected) {
    return (
      <div className="fui-avatar-main-container" style={style}>
        {/**Layer 1 */}
        {src ? (
          <img
            className="fui-avatar-image"
            height={"100%"}
            width={"100%"}
            src={src}
            alt={alt}
            onError={handleError}
          />
        ) : (
          <p className={"fui-avatar-label"}>{emptyLabel}</p>
        )}
        {/**Layer 2 */}
        {!readOnly && (
          <p className={"fui-avatar-label hide"} onClick={handleClick}>
            {src ? changeLabel : emptyLabel}
            <InputHidden
              multiple={false}
              accept={"image/*"}
              onChange={handleChangeInput}
              inputRef={inputRef}
            />{" "}
          </p>
        )}
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
};
export default Avatar;

/**
 * creates a dynamic css sheet for avatar
 * @param borderRadius the border radius
 * @returns a dynamic css sheet
 */
const makeDynamicAvatarCSSRules = (
  borderRadius: string | undefined
): DynamicSheet => {
  const styleSheet: DynamicSheet = DynamiCSS.makeStyleSheet({
    id: "avatar-styles",
    sheetRules: [
      {
        className: "fui-avatar-border",
        rules: {
          borderRadius: borderRadius,
        },
      },
    ],
  });
  return styleSheet;
};

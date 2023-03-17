import * as React from "react";
import { mergeProps } from "../overridable/mergeProps";
import { AvatarProps, defaultAvatarProps } from "./AvatarProps";
import "./Avatar.scss";
import InputHidden from "../input-hidden/InputHidden";
import { useAvatarStyle } from "./useAvatarStyle";
import { ImagePreview } from "../previews";
import InfiniteLoader from "../loader/InfiniteLoader/InfiniteLoader";
import Layer from "../file-mosaic/components/file-mosaic-layer/Layer";
const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    readOnly,
    src,
    alt,
    accept,

    onChange,
    emptyLabel,
    changeLabel,

    variant,
    borderRadius,
    uploadingLabel,
    isUloading,
    onError,

    smartImgFit,

    style,
    ...rest
  } = mergeProps(props, defaultAvatarProps);
  console.log("Avatar smartImgFit",smartImgFit);

  const inputRef: React.RefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null);

  const isStyleInjected: boolean = useAvatarStyle(borderRadius);

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
    console.log("Avatar error", evt);
    onError?.(evt);
  };

  if (isStyleInjected) {
    return (
      <React.Fragment>
        <div
          className={`fui-avatar-main-container${
            variant === "circle" ? " circle" : ""
          }`}
          style={style}
          {...rest}
        >
          {/**Layer 1 */}
          {isUloading ? (
            <Layer visible={true}>
              <div className={"fui-avatar-label"}>
                <InfiniteLoader />
                {uploadingLabel}
              </div>
            </Layer>
          ) : src ? (
            <ImagePreview
              className={`fui-avatar-image`}
              src={src}
              alt={alt}
              onError={handleError}
              smartImgFit={smartImgFit}
            />
          ) : (
            <div className={"fui-avatar-label"}>{emptyLabel}</div>
          )}
          {/**Layer 2 */}
          {!readOnly && (
            <>
              <p className={"fui-avatar-label hide"} onClick={handleClick}>
                {src ? changeLabel : emptyLabel}
              </p>
              <InputHidden
                multiple={false}
                accept={accept || "image/*"}
                onChange={handleChangeInput}
                inputRef={inputRef}
              />
            </>
          )}
        </div>
      </React.Fragment>
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
/* const makeDynamicAvatarCSSRules = (
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
}; */

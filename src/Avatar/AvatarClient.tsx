import * as React from "react";
import { mergeProps } from "../overridable/mergeProps";
import { AvatarProps, defaultAvatarProps } from "./AvatarProps";
import "./Avatar.css";
import InputHidden from "../InputHidden/InputHidden";
import { useAvatarStyle } from "./useAvatarStyle";
import InfiniteLoader from "../loader/InfiniteLoader/InfiniteLoader";
import Layer from "../FileMosaic/components/file-mosaic-layer/Layer";
import ImagePreview from "../ImagePreview/ImagePreview";
import { FileIdGenerator } from "@files-ui/core";

/**
 *
 * Demos:
 *
 * - [Avatar](https://www.files-ui.com/components/avatar)
 *
 * API:
 *
 * - [Avatar API](https://www.files-ui.com/api/avatar/)
 */
const AvatarClient: React.FC<AvatarProps> = (props: AvatarProps) => {
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
    loadingLabel: uploadingLabel,
    isLoading: isUploading,
    onError,

    smartImgFit,

    style,
    ...rest
  } = mergeProps(props, defaultAvatarProps);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const avatarId = React.useMemo(() => FileIdGenerator.getNextId() + "", []);

  const finalClassNameBorder: string | undefined = useAvatarStyle(
    avatarId.replace(":", "").replace(":", ""),
    borderRadius,
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = evt.target.files?.[0];
    if (file) {
      onChange?.(file);
    }
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (
    evt: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    onError?.(evt);
  };

  if (!finalClassNameBorder) return <></>;
  else {
    return (
      <div
        className={`fui-avatar-main-container${
          variant === "circle" ? " circle" : ""
        } ${finalClassNameBorder}`}
        style={style}
        role="img"
        aria-label={alt || "User avatar"}
        tabIndex={readOnly ? undefined : 0}
        onKeyDown={
          readOnly
            ? undefined
            : (evt) => {
                if (evt.key === "Enter" || evt.key === " ") {
                  evt.preventDefault();
                  handleClick();
                }
              }
        }
        {...rest}
      >
        {/**Layer 1 */}
        {isUploading ? (
          <Layer visible={true}>
            <div className={"fui-avatar-label"}>
              <InfiniteLoader size={50} />
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
            {!isUploading && (
              <div className={"fui-avatar-label hide"} onClick={handleClick}>
                {src ? changeLabel : emptyLabel}
              </div>
            )}
            <InputHidden
              multiple={false}
              accept={accept || "image/*"}
              onChange={handleChangeInput}
              inputRef={inputRef}
            />
          </>
        )}
      </div>
    );
  }
};
export default AvatarClient;

import { OverridableComponentProps } from "../overridable/OverridableComponentsProps";
export interface AvatarFullProps extends OverridableComponentProps {
    variant?: "square" | "circle";
    borderRadius?: string;
    src?: string | File;
    onChange?: Function,
    /**
     * Alternative label when an error occurs
     * on loading the image
     */
    alt?: string,

    emptyLabel?: string;
    uploadingLabel?: string;
    changeLabel?: string;
    /**
     * if a src is given, then avatar will show the image
     * or a file error message and will not allow
     * the user to change the picture. Also, layer on hover will not be shown
     */
    readOnly?: boolean;

    isUloading?: boolean;

    onError?: React.ReactEventHandler<HTMLImageElement>;
    /**
     * If true, images will be analized and showed according their orientation
     * orientation can be landscape if height < width. 
     * In that case height will be set to 100%. Otherwise width will be set to 100%
     */
    smart?: boolean;
}

export declare type AvatarProps =
  /*   {
      [D in keyof React.HTMLProps<HTMLDivElement>]: React.HTMLProps<HTMLDivElement>[D]
    } & */
{
    [P in keyof AvatarFullProps]: AvatarFullProps[P];

}
//React.HTMLProps<HTMLDivElement>
export const defaultAvatarProps: AvatarProps =
{
    variant: "square",
    alt: `avatar`,
    emptyLabel: "Agregar foto",
    changeLabel: "Cambiar foto",
    uploadingLabel: "Uploading...",
    readOnly: false,
    smart: false,
}
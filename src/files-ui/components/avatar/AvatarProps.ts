import { OverridableComponentProps } from "../overridable/OverridableComponentsProps";
export interface AvatarFullProps extends OverridableComponentProps {
    variant?: "square" | "circle";
    borderRadius?: string;
    src?: string;
    onChange?: Function,
    /**
     * Alternative label when an error occurs
     * on loading the image
     */
    alt?: string,

    emptyLabel?: string;
    changeLabel?: string;
    /**
     * if a src given, then avanatr will show the image
     * or a file error message and will not allow
     * the user to change the picture. Also, layer on hover will not be shown
     */
    readOnly?: boolean;

    onError?: React.ReactEventHandler<HTMLImageElement>;
}

export declare type AvatarProps = {
    [P in keyof AvatarFullProps]: AvatarFullProps[P];

}

export const defaultAvatarProps: AvatarProps =
{
    variant: "square",
    alt: `avatar`,
    emptyLabel: "Agregar foto",
    changeLabel: "Cambiar foto",
    readOnly: false
}
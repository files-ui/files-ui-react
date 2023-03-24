import { OverridableComponentProps } from "../overridable/OverridableComponentsProps";
export interface AvatarFullProps extends OverridableComponentProps {
    accept?: string;
    variant?: "square" | "circle";
    borderRadius?: string;
    /**
     * Just like any other input component. The value of the input element,
        required for a controlled component.
     */
    src?: string | File;
    /**
     * Callback fired when an image file is selected.
     * @param selectedFile The new file selected
     */
    onChange?: (selectedFile: File) => void,
    /**
     * Alternative label when an error occurs
     * on loading the image
     */
    alt?: string,
    /**
     * Label to be displayed when image source is not set.
     */
    emptyLabel?: React.ReactNode;
    /**
     * Label to be displayed when "isLoading" prop is set set. This will cover
        the current image.
     */
    loadingLabel?: React.ReactNode;
    /**
     * Label to be displayed when there is a valid source set.
     */
    changeLabel?: React.ReactNode;
    /**
     * If true and if a src is given, then avatar will show the image and will not allow
     * the user to change the picture. Also, layer on hover will not be shown
     */
    readOnly?: boolean;
    /**
     * If true, loadingLabel will be shown.
     */
    isLoading?: boolean;
    /**
     * Callback fired when an error occured on loading the image.
     */
    onError?: Function;

    /**
     * If not present, image width will be set to 100%.
     * 
     * If present, image will be analized and displayed according to its heigh and width.
     * Image with height greater than its width has a "portrait" orientation.
     * Otherwise it has a "landscape" orientation.
     * - If value is "orientation", image will be displayed complete by giving 100% 
     * to width prop if the orientation is "landscape". 
     * When orientation is "portrait", height prop will be set to 100%. Some images 
     * will show an empty space.
     * - If value is "center", image will be centered and will not be displayed complete.
     * This the empty space is avoided. This is achived by giving 100% to width prop if 
     * the orientation is "portrait". When orientation is "landscape", height prop will be set to 100%.
     * @default center
     */
    smartImgFit?: false | "orientation" | "center";
}
type DefDivProps = React.HTMLProps<HTMLDivElement>;
type DivPropsOmitAvatarFullProps = Omit<DefDivProps, keyof AvatarFullProps>;




export declare type AvatarProps =
    /*   {
        [D in keyof React.HTMLProps<HTMLDivElement>]: React.HTMLProps<HTMLDivElement>[D]
      } & */
    DivPropsOmitAvatarFullProps & {
        [P in keyof AvatarFullProps]: AvatarFullProps[P];

    }
//React.HTMLProps<HTMLDivElement>
export const defaultAvatarProps: AvatarProps =
{
    variant: "square",
    alt: `avatar`,
    emptyLabel: "Agregar foto",
    changeLabel: "Cambiar foto",
    loadingLabel: "Loading...",
    readOnly: false,
    //smart: false,
    smartImgFit: "center",
}
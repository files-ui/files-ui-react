import { OverridableComponentProps } from "../../overridable";



export interface ImagePreviewFullProps extends OverridableComponentProps {
    /**
     * Image source in string format (URL) or File Object (Will be read as URL)
     */
    src?: File | string;
    /**
     * Specifies an alternate text for the image, if the image for some reason cannot be displayed
     */
    alt?: string;
    /**
     * Height of the image preview. 
     * @default '100%'
     */
    height?: string;
    /**
     * Width of the image preview. 
     * @default '100%'
     */
    width?: string;
    /**
     * Fallback when the image is not loaded correctly
     */
    onError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    /**
     * If true, images will be analized and showed according their orientation
     * orientation can be landscape if height < width. 
     * In that case height will be set to 100%. Otherwise width will be set to 100%
     */
    smart?: boolean;
    /**
     * If not present, image width will be set to 100%.
     * 
     * If present, image will be analized and displayed according to its heigh and width.
     * Image width height greater than its width has a "portrait" orientation.
     * Otherwise it has a "landscape" orientation.
     * - If value is "orientation", image will be displayed complete by giving 100% 
     * to width prop if the orientation is "landscape". 
     * When orientation is "portrait", height prop will be set to 100%. Some images 
     * will show an empty space.
     * - If value is "center", image will be centered and will not be displayed complete.
     * This the empty space is avoided. This is achived by giving 100% to width prop if 
     * the orientation is "portrait". When orientation is "landscape", height prop will be set to 100%.
     * @default orientation
     */
    smartImgFit?: false | "orientation" | "center";

}
/* 
type DefImageProps = React.HTMLProps<HTMLImageElement>;
type ImgPropsOmitImagePreviewFullProps = Omit<DefImageProps, keyof ImagePreviewFullProps>;
 */

export declare type ImagePreviewProps =
    //ImgPropsOmitImagePreviewFullProps  &
    {
        [I in keyof ImagePreviewFullProps]: ImagePreviewFullProps[I]
    }

export const ImagePreviewDefaultProps: ImagePreviewProps = {
    //width: "100%",
    //height: "100%",
    alt: "image-preview",
    //className: "fui-image-preview"
    smartImgFit: "orientation"
}
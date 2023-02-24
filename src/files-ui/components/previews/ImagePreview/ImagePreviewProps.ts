import { OverridableComponentProps } from "../../overridable";



export interface ImagePreviewProps extends OverridableComponentProps {
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

}
export const ImagePreviewDefaultProps: ImagePreviewProps = {
    //width: "100%",
    //height: "100%",
    alt: "image-preview",
    //className: "fui-image-preview"
    smart:true
}
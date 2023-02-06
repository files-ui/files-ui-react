import { OverridableComponentProps } from "../../overridable";


export interface VideoPreviewPropsMap extends OverridableComponentProps {
    /**
     * video source in string format or File object
     * FileItemComponent returns this value in onWatch handler
     */
    videoSrc?: File | string;

}


type DefVideoProps = React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;


export type VideoPreviewProps =
    {
        [F in keyof VideoPreviewPropsMap]:
        VideoPreviewPropsMap[F]
    }
    &
    { [K in keyof DefVideoProps]:
        DefVideoProps[K]
    }



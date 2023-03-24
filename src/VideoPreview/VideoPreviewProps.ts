import { OverridableComponentProps } from "../overridable";


export interface VideoPreviewPropsMap extends OverridableComponentProps {
    /**
     * The video source in string format or File object.
     */
    src?: File | string;

}


type DefVideoProps = React.HTMLProps<HTMLVideoElement>;
type VideoPropsOmitVideoPreviewPropsMap = Omit<DefVideoProps, keyof VideoPreviewPropsMap>;


export type VideoPreviewProps = VideoPropsOmitVideoPreviewPropsMap &
    {
        [F in keyof VideoPreviewPropsMap]:
        VideoPreviewPropsMap[F]
    }




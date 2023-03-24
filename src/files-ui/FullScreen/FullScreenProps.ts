import { OverridableComponentProps } from "../overridable";


export interface FullScreenPropsMap extends OverridableComponentProps {
  /**
    * boolean value. Whether to open the preview or not
    */
  open?: boolean;
  /**
  * 	Callback fired when the component requests to be closed.
  */
  onClose?: Function;
}

type DefDivProps = React.HTMLProps<HTMLDivElement>;
type DivPropsOmitFullScreenPropsMap = Omit<DefDivProps, keyof FullScreenPropsMap>;


export type FullScreenProps =
  DivPropsOmitFullScreenPropsMap &
  {
    [F in keyof FullScreenPropsMap]: FullScreenPropsMap[F]
  }
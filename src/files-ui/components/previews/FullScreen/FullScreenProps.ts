import { OverridableComponentProps } from "../../overridable";


export interface FullScreenPropsMap extends OverridableComponentProps {
  /**
    * boolean value. Whether to open the preview or not
    */
  open?: boolean;
  /**
  * handler for on Close operation
  */
  onClose?: Function;
}

export type FullScreenProps =
  {
    [F in keyof FullScreenPropsMap]: FullScreenPropsMap[F]
  }
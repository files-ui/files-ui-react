import { UPLOADSTATUS } from "../core";
import { OverridableComponentProps } from "../overridable";

export interface TooltipPropsMap extends OverridableComponentProps {
  //message?: string;
  uploadStatus?: UPLOADSTATUS;
  /**
   * whether to show a valid or rejected message ("ok", "rejected")
   * by def. valid is false (if not present, it's false too)
   * This value wil affect preview behaviour,
   * If not valid, the preview will not be shown, nor the view button
   */
  valid?: boolean | null;
  /**
   * Whether to see as grid or inline (horizontal list)
   */
  errors?: string[];
  /**
* The message from server
*/
  uploadMessage?: string;
  /**
   * Whether to open or not the tooltip
   */
  open?: boolean;
}

export type TooltipProps = {
  [T in keyof TooltipPropsMap]: TooltipPropsMap[T]
}
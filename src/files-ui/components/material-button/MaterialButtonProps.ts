import { OverridableComponentProps } from "../overridable";

export interface MaterialButtonPropsInterface extends OverridableComponentProps {
    /////// BUTTON props
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `<a></a>` element will be used as the root node.
     * @default undefined
     */
    href?: string;
    /**
     * - uppercase: convert label to upper case 
     * - capitalize: convert first letter of each word on label to upper case
     * - lowercase: convert label to lower case 
     * - none: no text decoration 
     * @default 'uppercase'
     */
    textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
    /**
     * The type of style that will be rendered.
     * - contained: with background color
     * - outlined: border and transparent backgorund, on hover background color takes the color
     * - text: no borders and no background color, on hover 
     * @default 'contained'
     */
    variant?: "text" | "outlined" | "contained";
    /**
     * The text label for the button
     */
    label?: string;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;

    resetStyles?: boolean;


      /**
   * If true, will not show a ripple effect everytime
   * the user drops files or clicks the dropzone for selecting files
   * @default false
   */
  disableRipple?: boolean;


      /**
    * If true, dark mode colors are used in the component.
    */
      darkMode?: boolean;

}
type DefButtonPropsMap = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type DefButtonProps= {
    [F in keyof DefButtonPropsMap]:
    DefButtonPropsMap[F]
}
export type MaterialButtonProps =
    {
        [F in keyof MaterialButtonPropsInterface]:
        MaterialButtonPropsInterface[F]
    }
    &
    DefButtonProps
/*     export type  MaterialButtonPropsMap = MaterialButtonPropsInterface & DefButtonProps;

    export type MaterialButtonProps = {
        [F in keyof MaterialButtonPropsMap]:
        MaterialButtonPropsMap[F]
    } */
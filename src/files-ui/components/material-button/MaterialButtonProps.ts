import { OverridableComponentProps } from "../overridable";

interface MaterialButtonPropsInterface extends OverridableComponentProps {
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
    textDecoration?: "uppercase" | "capitalize" | "lowercase" | "none";
    /**
     * The type of style that will be rendered.
     * - contained: with background color
     * - outlined: border and transparent backgorund, on hover background color takes the color
     * - text: no borders and no background color, on hover 
     * @default 'contained'
     */
    variant?: "text" | "outlined" | "contained";
    /**
     * The label to place when no files are selected
     */
    label?: string;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;

    resetStyles?:boolean;

}
type DefButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type MaterialButtonProps =
    {
        [F in keyof MaterialButtonPropsInterface]:
        MaterialButtonPropsInterface[F]
    }
    &
    { [K in keyof DefButtonProps]:
        DefButtonProps[K]
    }


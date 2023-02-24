import { IconProps } from "../IconProps/IconProps";
/**
 * Added support for literals % and px
 * @param sizeStr 
 * @returns 
 */
export const parseSize = (sizeStr: IconProps["size"] | number): number => {
    if (typeof sizeStr === "number") {
        return sizeStr;
    }
    switch (sizeStr) {
        case "micro":
            return 8;
        case "small":
            return 15;
        case "semi-medium":
            return 18;
        case "medium":
            return 25;
        case "large":
            return 28;
        case "extra-large":
            return 32;
        default:
            return 24;
    }
}
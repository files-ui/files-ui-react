import { NAMED_COLORS } from "./namedColors";

/**
 * Make the color into a darker color
 * @param colorInput 
 * @returns the darked color in
 */
export const darkerColor = (colorInput: string, percentage = 25): string => {
    let darkedColor = "";
    const reduce = (100 - percentage) / 100;
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    if (isHexColor(colourNameToHex(colorInput))) {

        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));

        darkedColor = `rgb(${component1 * reduce}, ${component2 * reduce},${component3 * reduce})`;
    } else {
        if (colorInput.includes("rgba")) {
            let slicer = colorInput.replace("rgba(", "");
            let components: string[] = slicer.split(",");
            darkedColor = `rgb(${parseInt(components[0], 10) * reduce}, ${parseInt(components[1], 10) * reduce},${parseInt(components[2], 10) * reduce})`;
            //return darkedColor;
        } else if (colorInput.includes("rgb")) {

            let slicer = colorInput.replace("rgb(", "");
            let components: string[] = slicer.split(",");
            darkedColor = `rgb(${parseInt(components[0], 10) * reduce}, ${parseInt(components[1], 10) * reduce},${parseInt(components[2], 10) * reduce})`;
            // return darkedColor;
        }
    }

    return darkedColor;
}
/**
 * Make the color into a brighted color
 * @param colorInput 
 * @returns the brighted color 
 */
export const brighterColor = (colorInput: string, percentage = 25): string => {
    let brightedColor = "";
    const increase = (100 + percentage) / 100;
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    if (isHexColor(colourNameToHex(colorInput))) {

        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));

        brightedColor = `rgb(${component1 * increase}, ${component2 * increase},${component3 * increase})`;
    } else {
        if (colorInput.includes("rgba")) {
            let slicer = colorInput.replace("rgba(", "");
            let components: string[] = slicer.split(",");
            brightedColor = `rgb(${parseInt(components[0], 10) * increase}, ${parseInt(components[1], 10) * increase},${parseInt(components[2], 10) * increase})`;
            //return darkedColor;
        } else if (colorInput.includes("rgb")) {

            let slicer = colorInput.replace("rgb(", "");
            let components: string[] = slicer.split(",");
            brightedColor = `rgb(${parseInt(components[0], 10) * increase}, ${parseInt(components[1], 10) * increase},${parseInt(components[2], 10) * increase})`;
            // return darkedColor;
        }
    }

    return brightedColor;
}

/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 * 
 * 
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color 
 * @returns the rgba representation of a hex color
 */
export const hexColorToRGB = (colorInput: string | undefined, perc = 0, defaultColor?: string): string => {
    let resultDefault: string = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    const color: string = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }

    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', `rgba`).replace(')', `, ${perc})`);
    }

    // if is a hex color or named color
    if (!isHexColor(colourNameToHex(color))) {
        return resultDefault;
    }
    let resultOk: string = "";
    //let strVar: string = "";
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = `rgba(${component1}, ${component2},${component3} , ${perc})`;
    return resultOk;
}

/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 * 
 * 
 * @param colorInput the color inpt to test 
 * @returns true if the inputColor is a hexadecimal css color
 */
export const isHexColor = (colorInput: string): boolean => {

    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {

        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {


        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (let i = 1; i < colorInput.length; i++) {
        if (!hexArray.includes(colorInput.charAt(i))) {


            return false;
        }
    }

    return true;
}

/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
export function colourNameToHex(colour: string | undefined): string {
    /**
     * When not given
     */
    if (!colour) {
        return "";
    }
    /**
     * when named color is found
     */
    if (NAMED_COLORS[colour.toLocaleLowerCase()] !== undefined) {
        return NAMED_COLORS[colour.toLocaleLowerCase()];
    }
    /**
     * When the named color was not found
     */

    return colour;
}

/**
 * hexArray & decArray
 * 
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/**
 * Converts hex number in string representation to decimal number
 * 
 * 
 * @param letter the string hex number
 * @returns a decimal number
 */
export const hexTodec = (letter: string): number => {
    if (hexArray.includes(letter)) {
        return decArray[hexArray.indexOf(letter)];
    } else {
        return 0;
    }
}


/** 
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 * 
 * @param color param color given by user
 * @returns returns the same color 
 */
export const asureColor = (color?: string): string => {
    if (color !== undefined && color !== "") {
        return color;
    } else {
        return DEFAULT_FONT_COLOR;
    }
}
/** 
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 * 
 * @param color param color given by user
 * @returns returns the same color 
 */
export const completeAsureColor = (color?: string, perc = 1): string => {

    return hexColorToRGB(asureColor(colourNameToHex(color)), perc);

}



export const DEFAULT_FONT_COLOR = "#646c7f";
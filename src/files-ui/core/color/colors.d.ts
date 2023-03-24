/**
 * Make the color into a darker color
 * @param colorInput
 * @returns the darked color in
 */
export declare const darkerColor: (colorInput: string, percentage?: number) => string;
/**
 * Make the color into a brighted color
 * @param colorInput
 * @returns the brighted color
 */
export declare const brighterColor: (colorInput: string, percentage?: number) => string;
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 *
 *
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color
 * @returns the rgba representation of a hex color
 */
export declare const hexColorToRGB: (colorInput: string | undefined, perc?: number, defaultColor?: string) => string;
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 *
 *
 * @param colorInput the color inpt to test
 * @returns true if the inputColor is a hexadecimal css color
 */
export declare const isHexColor: (colorInput: string) => boolean;
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
export declare function colourNameToHex(colour: string | undefined): string;
/**
 * Converts hex number in string representation to decimal number
 *
 *
 * @param letter the string hex number
 * @returns a decimal number
 */
export declare const hexTodec: (letter: string) => number;
/**
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
export declare const asureColor: (color?: string) => string;
/**
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
export declare const completeAsureColor: (color?: string, perc?: number) => string;
export declare const DEFAULT_FONT_COLOR = "#646c7f";

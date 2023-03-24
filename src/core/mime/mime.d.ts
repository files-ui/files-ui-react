import { IconsMap } from "../types";
/**
 *
 * @param tailMime
 * @returns
 */
export declare const audioSelector: (tailMime: string) => keyof IconsMap;
export declare const textSelector: (tailMime: string) => keyof IconsMap;
export declare const imageSelector: (tailMime: string) => keyof IconsMap;
export declare const fontSelector: (tailMime: string) => keyof IconsMap;
export declare const videoSelector: (tailMime: string) => keyof IconsMap;
/**
 *
 * @param tailMime
 * @returns
 */
export declare const applicationSelector: (tailMime: string) => keyof IconsMap;
/**
 * Selects to wich mime type the mime type given belongs to
 * @param mimeType mime type to be searched
 * @returns the generic type,
if not found it return "octet" that means generic binary file
 */
export declare const mimeSelector: (mimeType?: string) => keyof IconsMap;
/**
 * Selects to wich mapped extension
 * the given exension belongs to
 *
 * @param extension
 * @returns
 */
export declare const extensionSelector: (extension?: string) => keyof IconsMap;
/**
 * Chack for extention whether the file is code os not
 * @param extension
 * @returns
 */
export declare const checkIsCode: (extension?: string) => keyof IconsMap;
/**
 * Looks for a suitable file icon
 * If not found, returns octet-stream url
 * @param props mime and extension from file to search
 * @returns the result file ico
 */
export declare const getURLFileIco: (file: File | undefined, customIcons: IconsMap | undefined) => ResultFileIco;
/**
 * Looks for a suitable file icon
 * @param props mime and extension from file to search
 * @returns the result file ico, if not found, turns octet-stream url
 */
export declare const getURLFileIcoFromNameAndType: (name: string | undefined, type: string | undefined, customIcons: IconsMap | undefined) => ResultFileIco;
interface ResultFileIco {
    url: string;
    mimeResume: keyof IconsMap;
}
export {};

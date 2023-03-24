import { ComponentLocalizer, LocalLabels, Localization } from "../types";
/**
 * TO-DO: Add Avatar localization in next release, inthe meanwhile it accepts custom labels
 */
export declare const AvatarLocalizer: ComponentLocalizer;
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export declare const AvatarLocalizerSelector: (local?: Localization) => LocalLabels;

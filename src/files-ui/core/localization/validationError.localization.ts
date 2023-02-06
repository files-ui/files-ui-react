import { ValidateErrorRussian } from "./Russian/localization.russian";
import { ComponentLocalizer, LocalLabels, Localization } from "./../types";
import { ValidateErrorEnglish } from "./English/localization.english";
import { ValidateErrorFrench } from "./French/localization.french";
import { ValidateErrorPortuguese } from "./Portuguese/localization.portuguese";
import { ValidateErrorSpanish } from "./Spanish/localization.spanish";
import { ValidateErrorSimplifiedChinese } from "./Chinese-simplified/localization.simplifiedChinese";
import { ValidateErrorTraditionalChinese } from "./Chinese-traditional/localization.traditionalChinese";
import { ValidateErrorItalian } from "./Italian/localization.italian";

export const ValidateErrorLocalizer: ComponentLocalizer = {
    "ES-es": ValidateErrorSpanish,
    "EN-en": ValidateErrorEnglish,
    "FR-fr": ValidateErrorFrench,
    "IT-it": ValidateErrorItalian,
    "PT-pt": ValidateErrorPortuguese,
    "RU-ru": ValidateErrorRussian,
    "ZH-cn": ValidateErrorSimplifiedChinese,
    "ZH-hk": ValidateErrorTraditionalChinese,
}
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const ValidateErrorLocalizerSelector = (local: Localization | undefined): LocalLabels => {
    if (!local || !["ES-es", "EN-en", "FR-fr", "IT-it", "PT-pt", "RU-ru", "ZH-cn", "ZH-hk"].includes(local)) {
        return ValidateErrorLocalizer["EN-en"];
    }
    return ValidateErrorLocalizer[local];
}
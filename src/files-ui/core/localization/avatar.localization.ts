import { ComponentLocalizer, LocalLabels, Localization } from "../types";
import { FileItemRussian } from "./Russian/localization.russian";
import { FileItemEnglish } from "./English/localization.english";
import { FileItemFrench } from "./French/localization.french";
import { FileItemPortuguese } from "./Portuguese/localization.portuguese";
import { FileItemSpanish } from "./Spanish/localization.spanish";
import { FileItemSimplifiedChinese } from "./Chinese-simplified/localization.simplifiedChinese";
import { FileItemTraditionalChinese } from "./Chinese-traditional/localization.traditionalChinese";
import { FileItemItalian } from "./Italian/localization.italian";
/**
 * TO-DO: Add Avatar localization in next release, inthe meanwhile it accepts custom labels
 */
export const AvatarLocalizer: ComponentLocalizer = {
    "ES-es": FileItemSpanish,
    "EN-en": FileItemEnglish,
    "FR-fr": FileItemFrench,
    "IT-it": FileItemItalian,
    "PT-pt": FileItemPortuguese,
    "RU-ru": FileItemRussian,
    "ZH-cn": FileItemSimplifiedChinese,
    "ZH-hk": FileItemTraditionalChinese
}

/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const AvatarLocalizerSelector = (local?: Localization): LocalLabels => {
    switch (local) {
        case "ES-es": return AvatarLocalizer["ES-es"];
        case "EN-en": return AvatarLocalizer["EN-en"];
        case "FR-fr": return AvatarLocalizer["FR-fr"];
        case "IT-it": return AvatarLocalizer["IT-it"];
        case "PT-pt": return AvatarLocalizer["PT-pt"];
        case "RU-ru": return AvatarLocalizer["RU-ru"];
        case "ZH-cn": return AvatarLocalizer["ZH-cn"];
        case "ZH-hk": return AvatarLocalizer["ZH-hk"];
        default: return AvatarLocalizer["EN-en"];
    }
}
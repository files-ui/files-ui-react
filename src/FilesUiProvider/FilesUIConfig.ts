import { IconsMap, Localization } from "@files-ui/core"

export type FilesUIConfig = {
    /**
     * If true, dark mode colors are used in FileMosaic and FIleCard components.
     */
    darkMode?: boolean;
    /**
     * Set of icons to override the existing ones
     */
    icons?: IconsSet;
    /**
     * The language in which text labels are shown.
     * @default "EN-en"
     */
    localization?: Localization;
    /**
     * Global font family for all Files UI components.
     * If set, overrides the default Poppins font stack via a CSS custom property.
     * Standard system fallbacks are appended automatically.
     * @example "Inter"
     * @example "Roboto"
     */
    fontFamily?: string;
}

export type IconsSet = IconsMap;
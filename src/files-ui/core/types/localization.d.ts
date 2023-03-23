export type Localization = "EN-en" | "ES-es" | "FR-fr" | "IT-it" | "PT-pt" | "RU-ru" | "ZH-cn" | "ZH-hk";
export type FunctionLabel = ((s1: string | number, s2?: string | number, s3?: string) => string);
export type LocalLabels = {
    [label: string]: string | FunctionLabel | LocalLabels;
};
export type ComponentLocalizer = {
    [language in Localization]: LocalLabels;
};

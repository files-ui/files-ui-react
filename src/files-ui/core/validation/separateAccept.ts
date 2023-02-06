/**
 * Separate the accept string array into an array of strings separated by commas
 * @param accept the string accept array
 * @returns an array of strings in wich every item
 */
export const separateAccept = (accept: string | undefined): string[] => {
    if (!accept || accept.length === 0) {
        return [];
    }
    const commaSeparatedAccpet: string[] = accept.split(",").map((acceptItem) => acceptItem.trim());
    return commaSeparatedAccpet;
}
/**
 * Cleans the input.value attribute
 * @param inputElement 
 */
export const cleanInput = (inputElement?: HTMLInputElement | null) => {
    if (!inputElement) return;
    inputElement.value = "";
}
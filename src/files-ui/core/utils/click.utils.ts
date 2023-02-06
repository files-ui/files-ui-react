/**
 * Performs stopPropagation and preventDefault functions on an click event instance
 * @param evt click event handler object
 */
export function
    handleClickUtil<T extends HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>
    (
        evt: React.MouseEvent<T, MouseEvent>
    ) {
    evt.preventDefault();
    evt.stopPropagation();
}
/**
 * Click programatically an input element.
 * If the input element is null, nothing will happend
 * @param input the input element target to make a click
 */
export const handleClickInput = (
    input: HTMLInputElement | null
) => {
    if (!input) return;
    input.click();
}
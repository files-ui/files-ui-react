/**
 * The max size of the word in characters
 */
export const DEFAULT_MAX_SIZE_WORD = 30;
/**
 * 
 * @param word the word to be shrinked
 * @returns the shrinked word
 */
export const shrinkWord = (word = "", card = false): string => {
    let newWord = word;
    if (card) {
        if (word.length >= 20) {
            newWord = word.slice(0, 10) + "..." + word.slice(-7);
        }
    } else if (word.length >= DEFAULT_MAX_SIZE_WORD) {
        newWord = word.slice(0, 13) + "..." + word.slice(-8);
    }
    return newWord;
};
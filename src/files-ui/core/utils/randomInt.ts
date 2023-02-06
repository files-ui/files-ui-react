/**
 * Random integer between min (included) and max (excluded)
 * @param min the min number
 * @param max the max number
 * @returns a random number between min (included) and max (excluded)
 */
export function getRandomInt(min: number = 0, max: number = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

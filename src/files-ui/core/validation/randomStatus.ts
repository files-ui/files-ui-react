import { UPLOADSTATUS } from "../types";
import { getRandomInt } from "../utils/randomInt";

/**
 * Generates a random number betwen 0 and 3
 * where
 * 0 => error
 * 1 => uploading
 * 2 => success
 * 3 => undefined
 * @returns a random upload status or undefined
 */
 export const getRandomUploadStatus = (): UPLOADSTATUS | undefined => {
    const result: number = getRandomInt(0, 4);
    switch (result) {
        case 0: return "error";
        case 1: return "uploading";
        case 2: return "success";
        default:
            return undefined;
    }
}
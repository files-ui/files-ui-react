import { UPLOADSTATUS } from "../types";
/**
 * Generates a random number betwen 0 and 3
 * where
 * 0 => error
 * 1 => uploading
 * 2 => success
 * 3 => undefined
 * @returns a random upload status or undefined
 */
export declare const getRandomUploadStatus: () => UPLOADSTATUS | undefined;

/**
 * Method to be used for request
 */
export declare type Method = "POST" | "PUT" | "PATCH";

/**
 * 
 * @param method the method in string format
 * @returns true if method is included in ["POST", "PUT", "PATCH"]
 */
export const idValidMethod = (method: string): boolean => {
    return ["POST", "PUT", "PATCH"].includes(method.toLowerCase());
}
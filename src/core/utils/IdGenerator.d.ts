/**
 * An id generator for FileItems
 */
export declare abstract class FileIdGenerator {
    static nextId: number;
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    static getNextId(): number;
}

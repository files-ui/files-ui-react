/**
 * An id generator for FileItems
 */
 export abstract class FileIdGenerator {
    static nextId = 0;
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    static getNextId(): number {
        FileIdGenerator.nextId++;
        return FileIdGenerator.nextId;
    }
}
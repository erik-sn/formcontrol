let lastId: number = 0;

/**
 * Generate a random ID number - use a different prefix depending on the
 * environment (browser or server) to support server side rendering.
 * 
 * @export
 * @returns string - prefix and new ID number
 */
export function generateId() {
    lastId++;
    let prefix: string = process.env.BROWSER ? "b" : "s";
    return `${prefix}${lastId}`;
}

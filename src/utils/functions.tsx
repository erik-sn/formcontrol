let lastId: number = 0;

export function generateId() {
    lastId++;
    let prefix: string = process.env.BROWSER ? "b" : "s";
    return `${prefix}${lastId}`;
}
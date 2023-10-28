/**
 * Create a range array
 * @param from The first number
 * @param to The last number
 * @return An array [from, ..., to]
 */
export default function createRange(from: number, to: number) {
    const range = [];
    for (let i = from; i <= to; i++) range.push(i);
    return range;
}

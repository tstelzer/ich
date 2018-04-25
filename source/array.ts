/**
 * Toggle a value in an array.
 * When `xs` contains `a`, append it, otherwise remove _all_ instances.
 */
export function toggle(a: any, xs: any[]): any[] {
    if (xs.includes(a)) {
        return xs.filter(x => x !== a)
    }
    return [...xs, a]
}

/**
 * Toggle a value in an array.
 * When `xs` contains `a`, remove _all_ instances, otherwise append it.
 */
export function toggle(a: any, xs: any[]): any[] {
    if (xs.includes(a)) {
        return xs.filter(x => x !== a)
    }
    return [...xs, a]
}

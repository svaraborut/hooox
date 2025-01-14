/**
 * Compares two arrays to contain the same values (according to Object.is)
 */
export function areArgsEqual(a: any[], b: any[]) {
    if (Array.isArray(a) && Array.isArray(b)) {
        for (let i = 0; i < a.length && i < b.length; i++) {
            if (!Object.is(a[i], b[i])) {
                return false
            }
        }
        return true
    } else {
        return Object.is(a, b)
    }
}

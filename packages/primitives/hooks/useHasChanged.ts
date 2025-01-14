import { usePrevious } from './usePrevious.ts'

/**
 * This hook will detect if a state has changed since the previous rendering cycle.
 */
export function useHasChanged<T>(state: T): boolean {
    const previous = usePrevious(state)
    return state !== previous
}

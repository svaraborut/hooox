# 🔌 @hooox/primitive

Primitive hooks part of the [@hooox](../../README.md) bundle.

## `useLatest`

Keeps a useRef() handle updated to the most recent value, useful to inject unstable values/callback into memoized
functions, example:

```ts
function useSomething(callback) {
    const last = useLatest(callback);
    const f = useCallback(() => {
        last.current?.();
    }, [])
}
```

## `useLatestCallback`

Wraps useLatest and adds a useCallback. Produces a stable callback given a possibly unstable input function. The
returned function is granted to be stable, but will always call the latest function passed to the hook

## `usePrevious`

This hook will return the previous value of a state. The previous value is the last stable value after the previous
rendering cycle.

```ts
function Component() {
    const [state, setState] = useState()
    const lastState = usePrevious(state)
    const hasChanged = lastState !== state
}
```

## `useHasChanged`

This hook will detect if a state has changed since the previous rendering cycle.

```ts
function Component() {
    const [state, setState] = useState()
    const hasChanged = useHasChanged(state)
}
```
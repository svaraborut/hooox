# 🔌 @hooox/promises

Promise handling hooks part of the [@hooox](../../README.md) bundle. This collection provide functionalities to handle
direct promise invocations within react environment, where misfires and concurrency is a common issue.

## `useMutedPromise`

Wraps an async function and returns a plain function to be used inside sync functions and component callbacks, any
exceptions will catch and console.debug() for development purposes.

The returned function is stable.

> [!IMPORTANT]  
> Remember to enable Verbose Debug Levels to see this log

## `useLatestCallback`

Wraps an async function such that only one call at-a-time may be in execution, any attempt to call the promise while
another execution is in progress will result in the second call throwing an exception.

Returned function is assured to be stable, an old result will always call the most fresh task.

> [!IMPORTANT]
> Promise should be stable, changing promise while a call is in progress will not affect the outcome nor interrupt the
> execution.

## `useSharedPromise`

Joins multiple promise call into one, only one promise will be running at-a-time, calls are not queued but rather
joined. When promises are called with arguments if arguments are the same as the original call the promise will be
joined and wait for the completion, if arguments are different the new call will throw a concurrency exception.

Arguments are shallow compared with Object.is (same strategy that is used by React on effect dependencies)

Returned function is assured to be stable, an old result will always call the most fresh task.

> [!IMPORTANT]
> Promise should be stable, changing promise while a call is in progress will not affect the outcome nor interrupt the
> execution.

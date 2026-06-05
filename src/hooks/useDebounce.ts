import { useEffect, useMemo } from "react"

function debounce<A = unknown, R = void>(
  func: (args: A) => R,
  wait: number
): [(args: A) => Promise<R>, () => void] {
  let timeoutId: number

  const debouncedFunc = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        resolve(func(args))
      }, wait)
    })

  const teardown = () => clearTimeout(timeoutId)

  return [debouncedFunc, teardown]
}

export const useDebounce = <A = unknown, R = void>(
  func: (args: A) => R,
  wait: number
): ((args: A) => Promise<R>) => {
  const [debouncedFun, teardown] = useMemo(
    () => debounce(func, wait),
    [func, wait]
  )

  useEffect(() => () => teardown(), [])

  return debouncedFun
}

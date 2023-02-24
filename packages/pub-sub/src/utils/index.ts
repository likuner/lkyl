// converts width and height to values with units
export function getValWithUnit(val: string | number): string {
  if (!val) return '0'
  const valStr = val.toString()
  if (['px', '%', 'rem', 'em', 'vh', 'vw'].some(k => valStr.endsWith(k))) {
    return valStr
  }
  return `${valStr}px`
}

// throttle function that unit by milliseconds
export function throttle(this: any, fn: Function, delay = 300, leading = true): Function {
  let timer: any = null
  let executed = false
  return (...args: any[]) => {
    if (!executed && leading) {
      fn.apply(this, args)
      executed = true
    }
    else if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
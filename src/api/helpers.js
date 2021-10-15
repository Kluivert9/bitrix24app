export const getQueryString = (method, options) => {
  let str = `${method}?`

  Object.keys(options).forEach((key, idx, arr) => {
    if (typeof options[key] === 'object' && options[key] !== null) {
      Object.keys(options[key]).forEach((sybKey, subIdx, subArr) => {
        if (subIdx === subArr.length - 1 && idx === arr.length - 1) {
          str += `${key}[${sybKey}]=${options[key][sybKey]}`
        } else {
          str += `${key}[${sybKey}]=${options[key][sybKey]}&`
        }
      })
    } else {
      if (idx === arr.length - 1) {
        str += `${key}=${options[key]}`
      } else {
        str += `${key}=${options[key]}&`
      }
    }
  })

  return str
}

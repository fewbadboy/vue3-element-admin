
/**
 * @param {String} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return ['admin', 'user'].includes(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validPassword(str) {
  let i = 0
  if (/[^\w!@#]/.test(str)) {
    return false
  }
  if (/\d/.test(str)) {
    ++i
  }
  if (/[a-zA-Z]/.test(str)) {
    ++i
  }
  if (/[_!@#]/.test(str)) {
    ++i
  }
  return i >= 2
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhone(str) {
  const reg = /^(\d{3}-\d{8}|\d{4}-\{7,8}|\d{11})$/
  return reg.test(str)
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {String} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {String} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arr
 * @returns {Boolean}
 */
export function isArray(arr) {
  if (!Array.isArray) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
  return Array.isArray(arr)
}

/**
 * @param {String} string
 * @returns {Boolean}
 */
export function isPositiveNumber(string) {
  return !Number.isNaN(+string) && +string > 0
}

/**
 * @param {string} string
 * @returns {boolean}
 */
export function validateIP(string) {
  const ipv4 = /^(?=(\b|\D))((\d|([1-9]\d)|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/
  const ipv6 = /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/
  return ipv4.test(string.trim()) || ipv6.test(string.trim())
}

/**
 * @param {string} string
 * @returns {boolean}
 */
export function validPort(string) {
  return +(string.trim()) >= 0 && +(string.trim()) <= 65535
}

/**
 * @param {string} string
 * @returns {boolean}
 */
export function validSpace(string) {
  const isSpace = string === '' || string === null || /^\s*$/.test(string)
  return isSpace
}

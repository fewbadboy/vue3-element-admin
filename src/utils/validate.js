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
export function validUsername(str) {
  return ['admin', 'user'].includes(str)
}

/**
 * @param {String} str
 * @returns {Boolean}
 */
export function validPassword(str) {
  return /\w+/.test(str)
}

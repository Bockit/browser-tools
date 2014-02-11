var insert = require('./insert')

module.exports = function prepend(el, things) {
    return insert(el, 0, things)
}
var insert = require('./insert')

module.exports = prepend

function prepend(el, things) {
    return insert(el, 0, things)
}
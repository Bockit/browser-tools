var toggleClass = require('./toggle')

module.exports = function addClass(el, cls) {
    toggleClass(el, cls, true)

    return el
}
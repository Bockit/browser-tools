var toggleClass = require('./toggle')

module.exports = function addClass(el, cls) {
    return toggleClass(el, cls, true)
}
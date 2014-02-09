var toggleClass = require('./toggle')

module.exports = function removeClass(el, cls) {
    toggleClass(el, cls, false)

    return el
}
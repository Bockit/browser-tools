var toggleClass = require('./toggle')

module.exports = function removeClass(el, cls) {
    return toggleClass(el, cls, false)
}
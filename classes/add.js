var toggleClass = require('./toggle')

module.exports = addClass

function addClass(el, cls) {
    toggleClass(el, cls, true)

    return el
}
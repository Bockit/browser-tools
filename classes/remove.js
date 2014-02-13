var toggleClass = require('./toggle')

module.exports = removeClass

function removeClass(el, cls) {
    toggleClass(el, cls, false)

    return el
}
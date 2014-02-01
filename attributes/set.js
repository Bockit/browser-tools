var remove = require('./remove')

module.exports = function setAttribute(el, prop, val) {
    if (val === null) return remove(el, prop)
    return el.setAttribute(prop, val + '')
}
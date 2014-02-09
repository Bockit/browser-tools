var remove = require('./remove')
var properties = require('./properties')

module.exports = function setAttribute(el, prop, val) {
    if (val === null) return remove(el, prop)
    if (properties.test(prop)) {
        el.setAttribute(prop, prop)
    }
    else {
        el.setAttribute(prop, val + '')
    }
    return el
}
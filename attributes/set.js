var remove = require('./remove')
var properties = require('./properties')
var setProperty = require('../properties/set')

module.exports = function setAttribute(el, prop, val) {
    if (typeof prop === 'object') {
        for (var key in prop) {
            setAttribute(el, key, prop[key])
        }
    } else {
        if (val === null) return remove(el, prop)
        // @TODO if val is function
        // args are i and the attr
        if (properties.test(prop)) {
            setProperty(el, prop, true)
        }
        else {
            el.setAttribute(prop, '' + val)
        }
    }
    return el
}
var prefixed = require('./prefix-map')()

module.exports = function setCss(el, prop, val) {
    if (typeof prop === 'object') {
        for (key in prop) {
            setCss(el, key, prop[key])
        }
    }
    else {
        el.style[prefixed[prop]] = val
    }
    return el
}
var prefixed = require('./prefix-map')()

module.exports = getCss

function getCss(el, prop) {
    return getComputedStyle(el, null).getPropertyValue(prefixed[prop])
}
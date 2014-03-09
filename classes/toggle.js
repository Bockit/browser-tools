var get = require('../attributes/get')
var set = require('../attributes/set')
var has = require('./has')

module.exports = toggleClass

function toggleClass(el, cls, toggle) {
    if (typeof toggle === 'undefined') toggle = !has(el, cls)

    if (el.classList) {
        el.classList.toggle(cls, toggle)
        return el
    }

    var classes = get(el, 'class') || ''
    // Remove it by default, then add if we're toggling
    classes = classes
        .replace(new RegExp('\\b' + cls + '\\b'), '')
        .replace(/\s\s+/g, '')

    if (toggle) {
        classes += ' ' + cls
    }

    classes = classes.trim()

    set(el, 'class', classes ? classes : null)

    return el
}
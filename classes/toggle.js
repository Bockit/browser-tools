var get = require('../attr/get')
var set = require('../attr/set')

module.exports = function toggleClass(el, cls, toggle) {
    if (el.classList) return el.classList.toggle(cls, toggle)

    var classes = get(el, 'class') || ''
    // Remove it
    classes
        .replace(new RegExp('\\b' + cls + '\\b'), '')
        .replace(/\s\s+/g, '')

    if (toggle) {
        classes += ' ' + toggle
    }

    return set(el, 'class', classes)
}
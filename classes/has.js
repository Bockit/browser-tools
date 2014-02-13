var get = require('../attributes/get')

module.exports = hasClass

function hasClass(el, cls) {
    if (el.classList) return el.classList.contains(cls)

    // Shim for no classList
    var classes = get(el, 'class') || ''
    return new RegExp('\\b' + cls + '\\b').test(classes)
}
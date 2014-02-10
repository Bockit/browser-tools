var get = require('./get')
var set = require('./set')

module.exports = css = {}

css.getCSS = get
css.setCSS = set

css.css = function css(el, prop, val) {
    return typeof val !== 'undefined' || typeof prop === 'object' ?
        set(el, prop, val) :
        get(el, prop)
}
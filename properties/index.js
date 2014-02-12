var get = require('./get')
var set = require('./set')

module.exports = css

css.getCss = get
css.setCss = set

function css(el, prop, val) {
    return typeof val !== 'undefined' || typeof prop === 'object' ?
        set(el, prop, val) :
        get(el, prop)
}
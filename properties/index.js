var get = require('./get')
var set = require('./set')

module.exports = property

css['getProperty'] = get
css['setProperty'] = set

function property(el, prop, val) {
    return typeof val !== 'undefined' || typeof prop === 'object' ?
        set(el, prop, val) :
        get(el, prop)
}
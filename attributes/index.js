var get        = require('./get')
var set        = require('./set')
var remove     = require('./remove')
var properties = require('./properties')

module.exports = attr = {}

attr.getAttr    = get
attr.setAttr    = set
attr.removeAttr = remove
attr.properties = properties

attr.attr = function attr(el, prop, val) {
    return typeof val !== 'undefined' || typeof prop === 'object' ?
        set(el, prop, val) :
        get(el, prop)
}
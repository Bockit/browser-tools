var get = require('./get')
var set = require('./set')

module.exports = function(el, prop, val) {
    return typeof val !== 'undefined' ? set(el, prop, val) : get(el, prop)
}
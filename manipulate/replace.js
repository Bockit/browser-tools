var before = require('./before')
var remove = require('./remove')

module.exports = replace

function replace(el, things) {
    var els = before(el, things)
    remove(el)
    return els
}
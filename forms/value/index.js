var get = require('./get')
var set = require('./set')

module.exports = value

value['getValue'] = get
value['setValue'] = set

function value(el, val) {
    return typeof val !== 'undefined'?
        set(el, val) :
        get(el)
}
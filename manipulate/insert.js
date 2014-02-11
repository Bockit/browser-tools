var coerce = require('../utils/coerce-html-array')
var children = require('./children')

module.exports = function insert(el, index, things) {
    things = coerce(things)

    var signpost = children(el)[index]
    if (!signpost) signpost = null

    for(var i = 0; i < things.length; i++) {
        el.insertBefore(things[i], signpost)
    }

    return things
}
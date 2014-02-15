var coerce = require('../utils/coerce-html-array')

module.exports = after

function after(el, things) {
    things = coerce(things)

    var next = next(el)

    for(var i = 0; i < things.length; i++) {
        el.parentNode.insertBefore(things[i], next)
    }
}
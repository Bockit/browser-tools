var coerce = require('../utils/coerce-html-array')

module.exports = before

function before(el, things) {
    things = coerce(things)

    for(var i = 0; i < things.length; i++) {
        el.parentNode.insertBefore(things[i], el)
    }
}
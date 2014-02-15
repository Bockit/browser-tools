var coerce = require('../utils/coerce-html-array')

module.exports = append

function append(el, things) {
    things = coerce(things)

    for(var i = 0; i < things.length; i++) {
        el.appendChild(things[i])
    }

    return things
}
var parent = require('./parent')

module.exports = parents

function parents(el) {
    var els = []
    do {
        el = parent(el)
        if (el) els.push(el)
    } while (el)

    return els
}
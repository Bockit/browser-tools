var prev = require('./prev')

module.exports = prevAll

function prevAll(el) {
    var els = []
    do {
        el = prev(el)
        if (el) els.push(el)
    } while (el)

    return els
}
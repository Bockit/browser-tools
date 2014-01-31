var prev = require('./prev')

module.exports = function prevAll(el) {
    var els = []
    do {
        el = prev(el)
        if (el) els.push(el)
    } while (el)

    return els
}
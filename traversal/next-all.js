var next = require('./next')

module.exports = function nextAll(el) {
    var els = []
    do {
        el = next(el)
        if (el) els.push(el)
    } while (el)

    return els
}
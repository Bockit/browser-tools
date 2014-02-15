var next = require('./next')

module.exports = nextAll

function nextAll(el) {
    var els = []
    el = next(el)
    while(el) {
        els.push(el)
        el = next(el)
    }
    return els
}
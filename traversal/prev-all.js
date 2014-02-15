var prev = require('./prev')

module.exports = prevAll

function prevAll(el) {
    var els = []
    el = prev(el)
    while(el) {
        els.push(el)
        el = prev(el)
    }
    return els
}
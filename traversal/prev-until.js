var prev = require('./prev')
  , matches = require('../query/matches')

module.exports = prevUntil

function prevUntil(el, selector) {
    var els = []
    el = prev(el)
    while(el && !matches(el, selector)) {
        els.push(el)
        el = prev(el)
    }
    return els
}
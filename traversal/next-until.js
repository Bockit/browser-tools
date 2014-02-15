var next = require('./next')
  , matches = require('../query/matches')

module.exports = nextUntil

function nextUntil(el, selector) {
    var els = []
    el = next(el)
    while(el && !matches(el, selector)) {
        els.push(el)
        el = next(el)
    }
    return els
}
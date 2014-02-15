var parent = require('./parent')

module.exports = between

// What scenarios do we have?
//
// el is a child of ancestor
// ancestor isn't an ancestor
// el is ancestor
//
// Non-inclusive list of elements between el and ancestor

function between(el, ancestor) {
    var els = []

    do {
        el = parent(el)
        els.push(el)
    } while(el && el !== ancestor)

    if (els.pop() === null) return []

    return els
}
var parents = require('./parents')
var matches = require('../query/matches')

module.exports = closest

function closest(el, query) {
    var ancestors = parents(el)
    for (var i = 0; i < ancestors.length; i++) {
        if (matches(ancestors[i], query)) return ancestors[i]
    }

    return null
}
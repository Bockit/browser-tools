var e = HTMLElement.prototype

var matches = e.webkitMatchesSelector || e.oMatchesSelector ||
    e.msMatchesSelector || e.matchesSelector || e.matches

module.exports = queryMatches

function queryMatches(el, query) {
    return matches.call(el, query)
}
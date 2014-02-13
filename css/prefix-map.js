var prefixed = /^(-webkit-|-moz-|-o-|-ms-)(.*)/

module.exports = buildPrefixMap

function buildPrefixMap() {
    var map = {}
    var properties = getComputedStyle(document.documentElement, null)

    for(var i = 0; i < properties.length; i++) {
        var matches = properties[i].match(prefixed)
        if (matches) {
            map[matches[2]] = matches[1] + matches[2]
        }
        else {
            map[properties[i]] = properties[i]
        }
    }

    return map
}
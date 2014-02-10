var prefixed = require('./prefix-map')()

// Properties that are number but can't have a px value
var cssNumbers = {
    columnCount: true
  , fillOpacity: true
  , fontWeight: true
  , lineHeight: true
  , opacity: true
  , order: true
  , orphans: true
  , widows: true
  , zIndex: true
  , zoom: true
}
var camelCase = function(str) {
    return str.replace(/-([\da-z])/gi, function (all, letter) {
        return letter.toUpperCase()
    })
}

module.exports = function setCss(el, prop, val) {
    if (typeof prop === 'object') {
        for (var key in prop) {
            setCss(el, key, prop[key])
        }
    }
    else {
        if (typeof val === 'number' && !(camelCase(prop) in cssNumbers))
            val += 'px'
        // For camelcased properties
        var propertie = prefixed[prop] || prop
        el.style[propertie] = val
    }
    return el
}
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

module.exports = function setCss(el, prop, val) {
    if (typeof prop === 'object') {
        for (key in prop) {
            setCss(el, key, prop[key])
        }
    }
    else {
        if (typeof val === 'number' && !cssNumbers[prop])
            val += 'px'
        el.style[prefixed[prop]] = val
    }
    return el
}
// Browser tools event mapping
var map = {}

module.exports = {
    map: map
  , add: add
  , remove: remove
  , processType: processType
}

function add(nonce, type, namespace, selector, wrapped, fn) {
    if (!map[nonce]) map[nonce] = {}

    if (!map[nonce][type]) map[nonce][type] = []

    map[nonce][type].push({
        namespace: namespace
      , selector: selector
      , wrapped: wrapped
      , fn: fn
    })
}

function remove(nonce, type, namespace, selector, fn) {
    if (!(map[nonce] && map[nonce][type])) return []

    var keep = []
    var remove = []

    var def = {}
    for(var i = 0; i < map[nonce][type].length; i++) {
        def = map[nonce][type][i]
        if (fn && (def.namespace === namespace && def.selector === selector && def.fn === fn) ) {
            // Specific
            remove.push(def.wrapped)
        }
        else if (def.namespace === namespace && def.selector === selector) {
            // General
            remove.push(def.wrapped)
        }
        else {
            // Nothing
            keep.push(def)
        }
    }

    map[nonce][type] = keep
    return remove
}

function processType(type) {
    var split = type.split('.')
      , type = split[0]
    split.shift()
    var namespace = split.join('.')

    return {
        type: type
      , namespace: namespace ? namespace : null
    }
}
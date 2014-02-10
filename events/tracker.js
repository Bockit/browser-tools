// Browser tools event mapping
var map = []

module.exports = {
    map: map
  , add: add
  , remove: remove
  , removeType: removeType
  , removeFn: removeFn
  , processType: processType
}

function add(nonce, type, wrapped, fn) {
    if (!map[nonce]) map[nonce] = {}

    var processed = processType(type)
      , type = processed.type
      , namespace = processed.namespace

    if (!map[nonce][type]) map[nonce][type] = []

    map[nonce][type].push({namespace: namespace, wrapped: wrapped, fn: fn})
}

function remove(nonce) {
    var remove = []

    if (!map[nonce]) {
        return remove
    }
    else {
        for (var type in map[nonce]) {
            remove = map[nonce][type].map(function(def) { return def.wrapped })
        }
        delete map[nonce]
    }

    return remove
}

function removeType(nonce, type) {
    var processed = processType(type)
      , type = processed.type
      , namespace = processed.namespace
      , keep = []
      , remove = []

    if (!namespace) {
        if (map[nonce] && map[nonce][type]) {
            remove = map[nonce][type].map(function(def) { return def.wrapped })
        }
        delete map[nonce][type]
    }
    else {
        if (map[nonce] && map[nonce][type]) {
            for(var i = 0; i < map[nonce][type].length; i++) {
                var def = map[nonce][type][i]
                if (def.namespace === namespace) {
                    remove.push(def.wrapped)
                }
                else {
                    keep.push(def)
                }
            }
            map[nonce][type] = keep
        }
    }

    return remove
}

function removeFn(nonce, type, fn) {
    var processed = processType(type)
      , type = processed.type
      , namespace = processed.namespace
      , keep = []
      , remove = []

    // Find and remove from the map, and return the functions to be removed.
    if (map[nonce] && map[nonce][type]) {
        for(var i = 0; i < map[nonce][type].length; i++) {
            var def = map[nonce][type][i]

            // Put objects with events that should stay in keep
            // Put fns we need to return so that they're detach into remove
            if (namespace) {
                if (def.fn === fn && def.namespace === namespace) {
                    remove.push(def.wrapped)
                }
                else {
                    keep.push(def)
                }
            }
            else {
                if (def.fn === fn) {
                    remove.push(def.wrapped)
                }
                else {
                    keep.push(def)
                }
            }

        }
        map[nonce][type] = keep
    }
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
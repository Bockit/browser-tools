// Browser tools event mapping

module.exports = {
    map: []
  , add: add
  , remove: remove
  , removeType: removeType
  , removeFn: removeFn
  , processType: processType
}

function add(nonce, type, fn) {
    if (!map[nonce]) map[nonce] = {}

    var processed = processType(type)
      , type = processed.type
      , namespace = processed.namespace

    if (!map[nonce][type]) map[nonce][type] = []

    map[nonce][type].push({namespace: namespace, fn: fn})
}

function remove(nonce) {

}

function removeType(nonce, type) {

}

function removeFn(nonce, type, fn) {
    var processed = processType(type)
      , type = processed.type
      , namespace = processed.namespace

    // Find and remove from the map, and return the functions to be removed.
    if (map[nonce] && map[nonce][type]) {
        var remove = []
        var keep = []
        for(var i = 0; i < map[nonce][type].length; i++) {
            // Put objects with functions we want to keep in keep
            // Put fns we need to return so that they're detach into remove
        }
        map[nonce][type] = keep
        return remove
    }
}

function processType(type) {
    var split = type.split['.']
      , type = split[0]
    split.shift()
    var namespace = split.join('.')

    return {
        type: type
      , namespace: namespace ? namespace : null
    }
}
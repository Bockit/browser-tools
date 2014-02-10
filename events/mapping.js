// Browser tools event mapping

module.exports = {
    map: []
  , add: add
  , remove: remove
}

function add(nonce, type, fn) {
    if (!map[nonce]) map[nonce] = {}

    var split = type.split['.']
    var type = split[0]
    split.shift()
    var namespace = split.join('')

    if (!map[nonce][type]) map[nonce][type] = []

    map[nonce][type].push({namespace: namespace, fn: fn})
}

function remove(nonce, type, fn) {
    switch(arguments.length - 1) {
        case 0:
            return removeAll(nonce)
        case 1:
            return removeAllType(nonce, type)
        default:
            return removeFn(nonce, type, fn)
    }
}

function removeAll(nonce) {

}

function removeAllType(nonce, type) {

}

function removeFn(nonce, type, fn) {

}
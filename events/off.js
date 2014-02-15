tracker = require('./tracker')
nonce = require('./nonce')

module.exports = off

function off(el, event, selector, callback) {
    var remove = []
      , processed = tracker.processType(event)
      , type = processed.type
      , namespace = processed.namespace

    if (arguments.length === 3 && typeof selector === 'function') {
        callback = selector
        selector = null
    }
    else if (arguments.length === 3 && typeof selector === 'string') {
        selector = callback
        callback = null
    }

    selector = selector || null
    callback = callback || null

    remove = tracker.remove(nonce.get(el), type, namespace, selector, callback)

    for (var i = 0; i < remove.length; i++) {
        el.removeEventListener(type, remove[i])
    }

    return el
}
tracker = require('./tracker')
nonce = require('./nonce')

module.exports = off

function off(el, event, callback) {
    var remove = []

    if (arguments.length >= 3) {
        remove = tracker.removeFn(nonce.get(el), event, callback)
    }
    else if (arguments.length === 2) {
        remove = tracker.removeType(nonce.get(el), event)
    }
    else {
        remove = tracker.remove(nonce.get(el))
    }

    var type = tracker.processType(event).type
    for (var i = 0; i < remove.length; i++) {
        el.removeEventListener(type, remove[i])
    }

    return el
}
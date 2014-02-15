var mouseEvents = require('./mouse-events')
var keyEvents = require('./key-events')
var normaliseMouse = require('./normalise/mouse')
var normaliseKey = require('./normalise/key')
var tracker = require('./tracker')
var nonce = require('./nonce')

module.exports = on

function on(el, event, callback) {
    if (!nonce.has(el)) nonce.set(el, nonce.gen())

    var wrapped = callback

    if (mouseEvents.test(event)) {
         wrapped = normaliseMouse(callback)
    }
    else if (keyEvents.test(event)) {
        wrapped = normaliseKey(callback)
    }

    tracker.add(nonce.get(el), event, wrapped, callback)

    var type = tracker.processType(event).type
    el.addEventListener(type, wrapped)

    return el
}

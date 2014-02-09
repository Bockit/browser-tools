var mouseEvents = require('./mouse-events')
var keyEvents = require('./key-events')
var normaliseMouse = require('./normalise/mouse')
var normaliseKey = require('./normalise/key')

module.exports = function on(el, event, callback) {
    if (mouseEvents.test(event)) {
        callback = normaliseMouse(callback)
    }
    else if (keyEvents.test(event)) {
        callback = normaliseKey(callback)
    }
    el.addEventListener(event, callback)

    return el
}

function normalise
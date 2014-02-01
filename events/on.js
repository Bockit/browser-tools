var mouseEvents = require('./mouse-events')
var normaliseMouse = require('./normalise/mouse')
var normaliseKey = require('./normalise/key')

module.exports = function on(el, event, callback) {
    if (mouseEvents.test(event)) {
        callback = normaliseMouse(callback)
    }
    return el.addEventListener(event, callback)
}

function normalise
var mouseEvents = require('./mouse-events')
var keyEvents = require('./key-events')
var normaliseMouse = require('./normalise/mouse')
var normaliseKey = require('./normalise/key')
var nonceGen = require('../utils/nonce')
var map = require('./mapping')

module.exports = function on(el, event, callback) {
    if (!hasNonce(el)) addNonce(el, nonceGen())

    if (mouseEvents.test(event)) {
        callback = normaliseMouse(callback)
    }
    else if (keyEvents.test(event)) {
        callback = normaliseKey(callback)
    }
    el.addEventListener(event, callback)

    return el
}

function addNonce(el, n) {
    el.__bt_nonce = n
}

function hasNonce(el) {
    return !!el.__bt_nonce
}

function getNonce(el) {
    return el.__bt_nonce
}
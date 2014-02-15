var mouseEvents = require('./mouse-events')
var keyEvents = require('./key-events')
var normaliseMouse = require('./normalise/mouse')
var normaliseKey = require('./normalise/key')
var tracker = require('./tracker')
var nonce = require('./nonce')
var matches = require('../query/matches')
var between = require('../traversal/between')

module.exports = on

function on(el, event, selector, callback) {
    if (!nonce.has(el)) nonce.set(el, nonce.gen())
    if (arguments.length === 3) {
        callback = selector
        selector = null
    }
    var processed = tracker.processType(event)
      , type = processed.type
      , namespace = processed.namespace

    wrapped = selector ? delegate(callback, selector) : callback

    if (mouseEvents.test(type)) {
         wrapped = normaliseMouse(wrapped)
    }
    else if (keyEvents.test(type)) {
        wrapped = normaliseKey(wrapped)
    }

    tracker.add(nonce.get(el), type, namespace, selector, wrapped, callback)
    el.addEventListener(type, wrapped)

    return el
}

function delegate(callback, selector) {
    return function(ev) {
        if (matches(ev.target, selector)) {
            ev.delegateTarget = ev.target
            callback.call(null, ev)
        }

        var els = between(ev.target, ev.currentTarget)
        for(var i = 0; i < els.length; i++) {
            if (matches(els[i], selector)) {
                ev.delegateTarget = els[i]
                callback.call(null, ev)
            }
        }
    }
}
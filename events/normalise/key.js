module.exports = normaliseKey

function normaliseKey(callback) {
    return function(ev) {
        if (ev.fixed) return callback.call(null, ev)

        if (ev.which == null) ev.which = cleanWhich(ev)

        ev.fixed = true
        callback.call(null, ev)
    }
}

function cleanWhich(ev) {
    return ev.charCode != null ? ev.charCode : ev.keyCode
}
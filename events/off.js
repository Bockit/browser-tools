module.exports = function off(el, event, callback) {
    callback = callback || null
    el.removeEventListener(event, callback)

    return el
}
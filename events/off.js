module.exports = function off(el, event, callback) {
    el.removeEventListener(event, callback)

    return el
}
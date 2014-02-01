module.exports = function off(el, event, callback) {
    return el.removeEventListener(event, callback)
}
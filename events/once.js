var on = require('./on')

module.exports = function once(el, event, callback) {
    return on(el, event, function() {
        el.removeEventListener(event, callback)
        callback.apply(null, arguments)
    })
}
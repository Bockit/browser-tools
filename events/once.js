var on = require('./on')
var off = require('./off')

module.exports = once

function once(el, event, callback) {
    return on(el, event, function() {
        off(el, event, callback)
        callback.apply(null, arguments)
    })
}
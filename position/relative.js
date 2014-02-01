var position = require('./position')

module.exports = function(el, from) {
    var posEl = position(el)
    var posFrom = position(from)

    return {
        x: posFrom.x - posEl.x
      , y: posFrom.y - posEl.y
    }
}
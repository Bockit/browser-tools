var get = require('./get')
var set = require('./set')

module.exports = text

text.getText = get
text.setText = set

function text(el, val) {
    return typeof val !== 'undefined'?
        set(el, val) :
        get(el)
}
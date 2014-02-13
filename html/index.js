var get = require('./get')
var set = require('./set')

module.exports = html

html['getHtml'] = get
html['setHtml'] = set

function html(el, val) {
    return typeof val !== 'undefined' ?
        set(el, val) :
        get(el)
}
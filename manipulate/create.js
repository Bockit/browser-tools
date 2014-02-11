var html = require('../html/set')
var children = require('../traversal/children')

module.exports = function create(html) {
    var doc = document.implementation.createHTMLDocument()
    html(doc.body, html)
    return children(doc.body)
}
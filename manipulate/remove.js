var parent = require('../traversal/parent')

module.exports = function remove(el) {
    return el.parentNode.removeChild(el)
}
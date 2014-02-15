var parent = require('../traversal/parent')

module.exports = remove

function remove(el) {
    return el.parentNode.removeChild(el)
}
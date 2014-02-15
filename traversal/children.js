module.exports = children

function children(el) {
    return Array.prototype.slice.call(el.children)
}
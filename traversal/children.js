module.exports = function children(el) {
    return Array.prototype.slice.call(el.children)
}
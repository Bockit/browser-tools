module.exports = function offsetParent(el) {
    return el.offsetParent || document.body
}
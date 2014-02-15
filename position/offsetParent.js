module.exports = offsetParent

function offsetParent(el) {
    return el.offsetParent || document.body
}
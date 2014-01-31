module.exports = function parent(el) {
    var p = el.parentNode
    return p && p.nodeType === 1 ? p : null;
}
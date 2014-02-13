module.exports = function queryAll(el, query) {
    if (arguments.length === 1) {
        query = el
        el = document
    }
    return Array.prototype.slice.call(el.querySelectorAll(query))
}
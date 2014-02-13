module.exports = function queryClass(el, query) {
    if (arguments.length === 1) {
        query = el
        el = document
    }
    return Array.prototype.slice.call(el.getElementsByClassName(query))
}
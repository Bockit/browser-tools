module.exports = function queryClass(el, query) {
    if (arguments.length === 1) {
        query = el
    }
    return document.getElementById(query)
}
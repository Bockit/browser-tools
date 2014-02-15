module.exports = queryOne

function queryOne(el, query) {
    if (arguments.length === 1) {
        query = el
        el = document
    }
    return el.querySelector(query)
}
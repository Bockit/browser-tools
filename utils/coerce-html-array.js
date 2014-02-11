var create = require('../manipulate/create')

module.exports = function coerceHtmlArray(things) {
    if (typeof things === 'string') return create(things)
    if (!Array.isArray(things)) return [things]
    return things
}
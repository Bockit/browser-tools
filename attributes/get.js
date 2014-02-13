var properties = require('./properties')
var getProperty = require('../properties/get')

module.exports = getAttribute

function getAttribute(el, prop) {
    if (properties.test(prop)) {
        return getProperty(el, prop)
    }
    return el.getAttribute(prop)
}
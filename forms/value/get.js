var nodeName = require('../../utils/nodename')
var all = require('../../query/all')
var getProperty = require('../../properties/get')

module.exports = getValue

function getValue(el) {
    if (nodeName(el, 'select')) return getSelectValue(el)
    return el.value
}

function getSelectValue(el) {
    var options = all(el, 'option').filter(function(option) {
        return getProperty(option, 'selected')
    })
    return options.map(getValue)
}
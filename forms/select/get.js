var all = require('../../query/all')
var getProperty = require('../../properties/get')
var getValue = require('../value/get')

module.exports = getSelectValue

function getSelectValue(el) {
    var options = all(el, 'option').filter(function(option) {
        return getProperty(option, 'selected')
    })
    return options.map(getValue)
}
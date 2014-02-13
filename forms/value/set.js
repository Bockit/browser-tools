var nodeName = require('../../utils/nodename')
var getProp = require('../../properties/get')
var setProp = require('../../properties/set')
var all = require('../../query/all')
var getValue = require('./get')

module.exports = setValue

function setValue(el, val) {
    if (nodeName(el, 'select')) return setSelectValue(el, val)
    if (val === null) val = ''
    el.value = val
    return el
}

function setSelectValue(el, vals) {
    vals = coerceArray(vals)

    if (getProp(el, 'multiple') && vals.length > 1) {
        var msg = 'You tried to set multiple values of a single-select box'
        throw new Exception(msg)
    }

    all(el, 'option').forEach(function(option) {
        setProp(option, 'selected', vals.indexOf(getValue(option)) >= 0)
    })

    return el
}

function coerceArray(thing) {
    if (Array.isArray(thing)) return thing
    return [thing]
}
var get = require('./get')
var set = require('./set')

module.exports = selectValue

selectValue['getSelectValue'] = get
selectValue['setSelectValue'] = set

function selectValue(el, val) {
    return typeof val !== 'undefined'?
        set(el, val) :
        get(el)
}
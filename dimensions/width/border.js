var css = require('../../css/get')

module.exports = borderWidth

function borderWidth(el) {
    if (css(el, 'box-sizing') === 'border-box') {
        return parseFloat(css(el, 'width'))
    }

    return parseFloat(css(el, 'width')) +
        parseFloat(css(el, 'padding-left')) +
        parseFloat(css(el, 'padding-right')) +
        parseFloat(css(el, 'border-left-width')) +
        parseFloat(css(el, 'border-right-width'))
}
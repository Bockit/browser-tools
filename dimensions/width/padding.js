var css = require('../../css/get')

module.exports = paddingHeight

function paddingHeight(el) {
    if (css(el, 'box-sizing') === 'border-box') {
        return parseFloat(css(el, 'width')) -
            parseFloat(css(el, 'border-left-width')) -
            parseFloat(css(el, 'border-right-width'))
    }

    return parseFloat(css(el, 'width')) +
        parseFloat(css(el, 'padding-left')) +
        parseFloat(css(el, 'padding-right'))
}
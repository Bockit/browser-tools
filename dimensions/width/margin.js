var css = require('../../css/get')

module.exports = marginWidth

function marginWidth(el) {
    if (css(el, 'box-sizing') === 'border-box') {
        return parseFloat(css(el, 'width')) +
            parseFloat(css(el, 'margin-left')) +
            parseFloat(css(el, 'margin-right'))
    }

    return parseFloat(css(el, 'width')) +
        parseFloat(css(el, 'padding-left')) +
        parseFloat(css(el, 'padding-right')) +
        parseFloat(css(el, 'border-left-width')) +
        parseFloat(css(el, 'border-right-width')) +
        parseFloat(css(el, 'margin-left')) +
        parseFloat(css(el, 'margin-right'))
}
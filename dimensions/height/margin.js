var css = require('../../css/get')

module.exports = marginHeight

function marginHeight(el) {
    if (css(el, 'box-sizing') === 'border-box') {
        return parseFloat(css(el, 'height')) +
            parseFloat(css(el, 'margin-top')) +
            parseFloat(css(el, 'margin-bottom'))
    }

    return parseFloat(css(el, 'height')) +
        parseFloat(css(el, 'padding-top')) +
        parseFloat(css(el, 'padding-bottom')) +
        parseFloat(css(el, 'border-top-width')) +
        parseFloat(css(el, 'border-bottom-width')) +
        parseFloat(css(el, 'margin-top')) +
        parseFloat(css(el, 'margin-bottom'))
}
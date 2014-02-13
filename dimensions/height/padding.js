var css = require('../../css/get')

module.exports = paddingHeight

function paddingHeight(el) {
    if (css(el, 'box-sizing') === 'border-box') {
        return parseFloat(css(el, 'height')) -
            parseFloat(css(el, 'border-top-width')) -
            parseFloat(css(el, 'border-bottom-width'))
    }

    return parseFloat(css(el, 'height')) +
        parseFloat(css(el, 'padding-top')) +
        parseFloat(css(el, 'padding-bottom'))
}
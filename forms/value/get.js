module.exports = getValue

function getValue(el) {
    console.log('getValue', el, el.value)
    return el.value
}
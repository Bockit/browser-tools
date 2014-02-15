module.exports = setValue

function setValue(el, val) {
    if (val === null) val = ''
    el.value = val
    return el
}
module.exports = removeAttribute

function removeAttribute(el, prop) {
    el.removeAttribute(prop)
    return el
}
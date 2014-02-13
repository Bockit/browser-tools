module.exports = removeAttrribute

function removeAttribute(el, prop) {
    el.removeAttribute(prop)
    return el
}
module.exports = setProperty

function setProperty(el, prop, val) {
    if (typeof prop === 'object') {
        for (var key in prop) {
            setProperty(el, key, prop[key])
        }
    }
    else {
        el[prop] = val
        return el
    }
    return el
}
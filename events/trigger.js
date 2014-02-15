module.exports = trigger

function trigger(el, type, data) {
    data = data || {}
    ev = makeEvent(type, data)
    el.dispatchEvent(ev)
}

function makeEvent(type, data) {
    return CustomEvent(type, data)
}
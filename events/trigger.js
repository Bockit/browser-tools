var htmlEvents = require('./html-events')

module.exports = trigger

function trigger(el, type, data) {
    data = data || {}
    el.dispatchEvent(makeEvent(type, data))
}

function makeEvent(type, data) {
    if (htmlEvents.test(type)){
        var ev = document.createEvent('HTMLEvents')
    }
    else {
        var ev = document.createEvent('CustomEvent')
    }
    ev.initEvent(type, true, true, data)

    return ev
}
module.exports = normaliseMouse

function normaliseMouse(callback) {
    return function(ev) {
        if (ev.fixed) return callback.call(null, ev)

        if (!ev.which && ev.button !== undefined) ev.which = cleanWhich(ev)
        if (!ev.pageX == null && ev.clientX != null ) {
            ev.pageX = cleanPageX(ev)
            ev.pageY = cleanPageY(ev)
        }

        ev.fixed = true;
        return callback.call(null, ev)
    }
}

function cleanWhich(ev) {
    // From jQuery
    return (ev.button & 1 ? 1 : (ev.button & 2 ? 3 : (ev.button & 4 ? 2 : 0)));
}

function cleanPageX(ev) {
    var eventDoc = ev.target.ownerDocument || document;
    var doc = eventDoc.documentElement;
    var b = eventDoc.body;

    return ev.clientX + (doc && doc.scrollLeft || b && b.scrollLeft || 0) -
        (doc && doc.clientLeft || b && b.clientLeft || 0)
}

function cleanPageY(ev) {
    var eventDoc = ev.target.ownerDocument || document;
    var doc = eventDoc.documentElement;
    var b = eventDoc.body;

    return ev.clientY + (doc && doc.scrollTop  || b && b.scrollTop  || 0) -
        (doc && doc.clientTop  || b && b.clientTop  || 0);

}
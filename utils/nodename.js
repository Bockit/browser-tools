module.exports = function nodeName(el, name) {
    return el.nodeName.toLowerCase() === name.toLowerCase();
}
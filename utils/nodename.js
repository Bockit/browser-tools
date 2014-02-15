module.exports = nodeName

function nodeName(el, name) {
    return el.nodeName.toLowerCase() === name.toLowerCase();
}
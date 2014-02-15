module.exports = siblings

function siblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function(child){
        return child !== el
    })
}
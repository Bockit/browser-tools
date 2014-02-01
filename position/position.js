module.exports = function position(el) {
    var box = el.getBoundingClientRect()
    return {
        top: box.y + window.pageXOffset
      , left: box.x + window.pageYOffset
    }
}
module.exports = offset

function offset(el) {
    return {
        left: el.offsetLeft
      , top: el.offsetTop
    }
}
module.exports = function endsWith(str, val) {
    return str.slice(-val.length) === val
}
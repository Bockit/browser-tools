module.exports = function startsWith(str, val) {
    return str.slice(val.length) === val
}
module.exports = startsWith

function startsWith(str, val) {
    return str.slice(val.length) === val
}
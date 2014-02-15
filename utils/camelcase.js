module.exports = camelCase

function camelCase(str) {
    return str.replace(/-([\da-z])/gi, function (all, letter) {
        return letter.toUpperCase()
    })
}
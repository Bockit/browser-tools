module.exports = {
    set: set
  , has: has
  , get: get
  , gen: gen
}

function set(el, n) {
    el.__bt_nonce = n
}

function has(el) {
    return !!el.__bt_nonce
}

function get(el) {
    return el.__bt_nonce
}

var id = 1
function gen() {
    return '' + (id++)
}
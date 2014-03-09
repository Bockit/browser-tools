var test = require('tape')
var concat = require('concat-stream')
var parent = require('postie')(window.parent)

var add = require('../../classes/add')
var has = require('../../classes/has')
var remove = require('../../classes/remove')
var toggle = require('../../classes/toggle')


var out = concat(function(output) {
    parent.post('tap', output)
})
test.createStream().pipe(out)

test('Classes', function(t) {
    var el = document.getElementById('test')

    t.ok(has(el, 'foo'), 'element has class')
    add(el, 'bar')
    t.ok(has(el, 'bar'), 'element add class')
    remove(el, 'bar')
    t.ok(!has(el, 'bar'), 'element remove class')
    toggle(el, 'bar')
    t.ok(has(el, 'bar'), 'element toggle class')
    toggle(el, 'bar', true)
    t.ok(has(el, 'bar'), 'element toggle class with boolean')

    t.end()
})

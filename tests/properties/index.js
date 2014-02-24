var test = require('tape').createHarness()
var concat = require('concat-stream')
var parent = require('postie')(window.parent)

var get = require('../../properties/get')
var set = require('../../properties/set')
var checked = document.getElementById('checkbox-checked')
var notChecked = document.getElementById('checkbox-not-checked')

var out = concat(function(output) {
    parent.post('tap', output)
})
test.createStream().pipe(out)

test('Getting properties that exist already', function(t) {
    t.ok(get(checked, 'checked'))
    t.ok(!get(notChecked, 'checked'))
    t.end()
})

test('Setting properties', function(t) {
    t.ok(get(set(checked, 'checked', true), 'checked'))
    t.ok(!get(set(checked, 'checked', false), 'checked'))
    t.end()
})

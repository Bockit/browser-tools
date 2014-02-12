window.bt = require('../../index')

var test = require('tape')
  , get = require('../../forms/value/get')
  , set = require('../../forms/value/set')
  , els = {
        text: document.getElementById('input-text')
      , hidden: document.getElementById('input-hidden')
      , password: document.getElementById('input-password')
      , checkbox: document.getElementById('input-checkbox')
      , radio: document.getElementById('input-radio')
      , textarea: document.getElementById('textarea')
    }
  , valuedEls = {
        text: document.getElementById('input-text-valued')
      , hidden: document.getElementById('input-hidden-valued')
      , password: document.getElementById('input-password-valued')
      , checkbox: document.getElementById('input-checkbox-valued')
      , radio: document.getElementById('input-radio-valued')
      , textarea: document.getElementById('textarea-valued')
  }

test('Initially with no values', function(t) {
    for(var k in els) {
        var el = els[k]
        if (k === 'checkbox' || k === 'radio') {
            t.equal(get(el), 'on', k + ' is on')
        }
        else {
            t.equal(get(el), '', k + ' is an empty string')
        }
    }

    t.end()
})

test('Initially with some values', function(t) {
    for(var k in valuedEls) {
        var el = valuedEls[k]
        t.equal(get(el), 'foo', k + ' is foo')
    }

    t.end()
})

test('Programmatically set and get some values', function(t) {
    for(var k in els) {
        var el = els[k]
        t.equal(get(set(el, 'foo')), 'foo', k + ' is foo')
    }

    t.end()
})

test('Programatically remove initial values', function(t) {
    for(var k in valuedEls) {
        var el = valuedEls[k]

        t.equal(get(set(el, null)), '', k + ' is an empty string')
    }

    t.end()
})

test('Programatically remove programatically set values', function(t) {
    for(var k in els) {
        var el = els[k]

        t.equal(get(set(set(el, 'foo'), null)), '', k + ' is an empty string')
    }

    t.end()
})
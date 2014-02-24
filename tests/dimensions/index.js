var test = require('tape').createHarness()
  , width = require('../../dimensions/width')
  , height = require('../../dimensions/height')
  , concat = require('concat-stream')
  , parent = require('postie')(window.parent)

var out = concat(function(output) {
    parent.post('tap', output)
})
test.createStream().pipe(out)

function get(id) { return document.getElementById(id) }
function dimensions(id, axis) {
    var el = get(id)

    return {
        content: axis.content(el)
      , padding: axis.padding(el)
      , border: axis.border(el)
      , margin: axis.margin(el)
    }
}

test('Standard', function(t) {
    t.test('Widths in border-box', function(st) {
        var d = dimensions('widths-border-box', width)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = dimensions('widths-content-box', width)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 110, 'margin')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = dimensions('heights-border-box', height)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = dimensions('heights-content-box', height)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 110, 'margin')

        st.end()
    })

    t.end()
})

test('Position fixed', function(t) {
    t.test('Widths in border-box', function(st) {
        var d = dimensions('fixed-widths-border-box', width)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = dimensions('fixed-widths-content-box', width)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 110, 'margin')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = dimensions('fixed-heights-border-box', height)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = dimensions('fixed-heights-content-box', height)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 110, 'margin')

        st.end()
    })

    t.end()
})

test('Position absolute', function(t) {
    t.test('Widths in border-box', function(st) {
        var d = dimensions('absolute-widths-border-box', width)

        st.equal(d.content, 280, 'content')
        st.equal(d.padding, 300, 'padding')
        st.equal(d.border, 320, 'border')
        st.equal(d.margin, 340, 'margin')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = dimensions('absolute-widths-content-box', width)

        st.equal(d.content, 280, 'content')
        st.equal(d.padding, 300, 'padding')
        st.equal(d.border, 320, 'border')
        st.equal(d.margin, 340, 'margin')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = dimensions('absolute-heights-border-box', height)

        st.equal(d.content, 280, 'content')
        st.equal(d.padding, 300, 'padding')
        st.equal(d.border, 320, 'border')
        st.equal(d.margin, 340, 'margin')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = dimensions('absolute-heights-content-box', height)

        st.equal(d.content, 280, 'content')
        st.equal(d.padding, 300, 'padding')
        st.equal(d.border, 320, 'border')
        st.equal(d.margin, 340, 'margin')

        st.end()
    })

    t.end()
})

test('Negative margins', function(t) {
    t.test('Widths in border-box', function(st) {
        var d = dimensions('nm-widths-border-box', width)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 30, 'margin')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = dimensions('nm-widths-content-box', width)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = dimensions('nm-heights-border-box', height)

        st.equal(d.content, 10, 'content')
        st.equal(d.padding, 30, 'padding')
        st.equal(d.border, 50, 'border')
        st.equal(d.margin, 30, 'margin')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = dimensions('nm-heights-content-box', height)

        st.equal(d.content, 50, 'content')
        st.equal(d.padding, 70, 'padding')
        st.equal(d.border, 90, 'border')
        st.equal(d.margin, 70, 'margin')

        st.end()
    })

    t.end()
})

test('SVG', function(t) {
    var d = dimensions('width-svg', width)

    t.equal(isNaN(d.content), true, 'content svg')
    t.equal(isNaN(d.padding), true, 'padding svg')
    t.equal(isNaN(d.border), true, 'border svg')
    t.equal(isNaN(d.margin), true, 'margin svg')
    t.end()
})

test('Display none', function(t) {
    t.test('Widths in border-box', function(st) {
        var d = dimensions('none-widths-border-box', width)

        st.equal(d.content, 10, 'content widths none (border box)')
        st.equal(d.padding, 30, 'padding widths none (border box)')
        st.equal(d.border, 50, 'border widths none (border box)')
        st.equal(d.margin, 70, 'margin widths none (border box)')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = dimensions('none-widths-content-box', width)

        st.equal(d.content, 50, 'content widths none (content box)')
        st.equal(d.padding, 70, 'padding widths none (content box)')
        st.equal(d.border, 90, 'border widths none (content box)')
        st.equal(d.margin, 110, 'margin widths none (content box)')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = dimensions('none-heights-border-box', height)

        st.equal(d.content, 10, 'content widths none (border box)')
        st.equal(d.padding, 30, 'padding widths none (border box)')
        st.equal(d.border, 50, 'border widths none (border box)')
        st.equal(d.margin, 70, 'margin widths none (border box)')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = dimensions('none-heights-content-box', height)

        st.equal(d.content, 50, 'content widths none (content box)')
        st.equal(d.padding, 70, 'padding widths none (content box)')
        st.equal(d.border, 90, 'border widths none (content box)')
        st.equal(d.margin, 110, 'margin widths none (content box)')

        st.end()
    })

    t.end()
})

test('Detached', function(t) {

    function createDiv(boxSizing) {
        var div = document.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.padding = '10px'
        div.style.margin = '10px'
        div.style.borderStyle = 'solid'
        div.style.borderWidth = '10px'
        div.style.oBoxSizing = boxSizing
        div.style.webkitBoxSizing = boxSizing
        div.style.mozBoxSizing = boxSizing
        div.style.msBoxSizing = boxSizing
        div.style.boxSizing = boxSizing

        return div
    }

    function detachedDimensions(el, axis) {
        return {
            content: axis.content(el)
          , padding: axis.padding(el)
          , border: axis.border(el)
          , margin: axis.margin(el)
        }
    }

    var border = createDiv('border-box')
    var content = createDiv('content-box')

    t.test('Widths in border-box', function(st) {
        var d = detachedDimensions(border, width)

        st.equal(isNaN(d.content), true, 'content')
        st.equal(isNaN(d.padding), true, 'padding')
        st.equal(isNaN(d.border), true, 'border')
        st.equal(isNaN(d.margin), true, 'margin')

        st.end()
    })

    t.test('Widths in content-box', function(st) {
        var d = detachedDimensions(content, height)

        st.equal(isNaN(d.content), true, 'content')
        st.equal(isNaN(d.padding), true, 'padding')
        st.equal(isNaN(d.border), true, 'border')
        st.equal(isNaN(d.margin), true, 'margin')

        st.end()
    })

    t.test('Heights in border-box', function(st) {
        var d = detachedDimensions(border, width)

        st.equal(isNaN(d.content), true, 'content')
        st.equal(isNaN(d.padding), true, 'padding')
        st.equal(isNaN(d.border), true, 'border')
        st.equal(isNaN(d.margin), true, 'margin')

        st.end()
    })

    t.test('Heights in content-box', function(st) {
        var d = detachedDimensions(content, height)

        st.equal(isNaN(d.content), true, 'content')
        st.equal(isNaN(d.padding), true, 'padding')
        st.equal(isNaN(d.border), true, 'border')
        st.equal(isNaN(d.margin), true, 'margin')

        st.end()
    })

    t.end()
})
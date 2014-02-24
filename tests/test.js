var postie = require('postie')
var parser = require('tap-parser')
var through = require('through')
var tests = ['dimensions', 'forms', 'properties']

tests.forEach(runTest)

function runTest (name) {
    // Add an iframe
    var frame = document.createElement('iframe')
    frame.setAttribute('class', 'test-frame')
    frame.src = name + '/'
    document.body.appendChild(frame)

    // Listen to its postmessages
    var child = postie(frame.contentWindow)
    var p = parser()
    var input = through()
    input.pipe(p)
    p.on('results', function(results) {
        console.log(name, results)
    })
    child.on('tap', function(tap) {
        input.queue(tap)
        input.queue(null)
    })
}
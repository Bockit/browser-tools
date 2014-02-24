// Build everything
var path = require('path')
  , fs = require('fs')
  , browserify = require('browserify')
  , beefy = require('beefy')

var counter = 0
  , tests = [
        'dimensions'
      , 'forms'
      , 'properties'
    ]

console.log('Building modules...')
tests.forEach(function(test) {
    console.log('Bundling module: ' + test)
    var file = fs.createWriteStream('./tests/' + test + '/bundle.js')

    browserify('./tests/' + test + '/index.js')
        .bundle({}, function(err, src) {
            if (err) handleErr(err, test)
            if (counter++ === tests.length - 1) finish()
        })
        .pipe(file)
})

function finish() {
    var server = beefy(
        './tests',
        'browserify', ['-d'],
        {'bundle.js': './tests/test.js'}
    )
    console.log('')
    console.log('Serving test page on port 8080...')

    server.listen(8080)
}

function handleErr(err, module) {
    console.error('Error bundling module: ' + module)
    throw err
}
var fs = require('fs')
var assert = require('assert')

var rework = require('rework')
var moveMedia = require('../')

function read(file) {
  return fs.readFileSync('test/fixtures/' + file + '.css', 'utf8')
}

function test(file, msg, args) {
  var out = rework(read(file)).use(moveMedia(args)).toString()
  assert.equal(out, read(file + '.out'), msg + ': ' + out)
}

test('general', 'General failed')

test('ordered', 'Ordered failed', [
  '(min-width: 100px)',
  '(max-width: 100px)'
])
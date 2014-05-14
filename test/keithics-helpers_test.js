'use strict';

var khelpers = require('../lib/keithics-helpers.js');

/*
  ======== A Handy Little Mocha Reference ========
  https://github.com/visionmedia/mocha/

  Test assertions:
    assert.fail(actual, expected, message, operator)
    assert(value, message), assert.ok(value, [message])
    assert.equal(actual, expected, [message])
    assert.notEqual(actual, expected, [message])
    assert.deepEqual(actual, expected, [message])
    assert.notDeepEqual(actual, expected, [message])
    assert.strictEqual(actual, expected, [message])
    assert.notStrictEqual(actual, expected, [message])
    assert.throws(block, [error], [message])
    assert.doesNotThrow(block, [message])
    assert.ifError(value)

    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/

var assert = require('assert');

describe('KeithicsTest', function(){
  describe('#randomString(5)', function(){
    it('should return a random string', function(){
      assert.equal('aaaaa',khelpers.randomString(5,'a'));
    });  
  });

  describe('#ellipsize(str, 32, .5)', function(){
    it('should split a string at a defined maximum length, and insert an ellipsis', function(){
      var str = 'this_string_is_entirely_too_long_and_might_break_my_design.jpg';
      assert.equal('this_string_is_e&hellip;ak_my_design.jpg',khelpers.ellipsize(str, 32, .5));
    });  
  });

});

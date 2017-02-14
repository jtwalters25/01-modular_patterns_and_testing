'use strict';

const greet = require('../lib/greet.js')
const assert = require('assert');

describe('Good Module', function(){
  describe('#sayHey', function(){
    it('should return hello Jeremiah!', function() {
      var result = greet.sayHey('Jeremiah');
      assert.ok(result === 'hello Jeremiah!', 'not equal to hello Jeremiah!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown');
    });
  });

  describe('#sayByeBye', function() {
    it('should return see ya later!', function(){
    var bye = 'see ya later!';
    assert.ok(bye === 'see ya later!', 'not equal to see ya later!');
  });
});
});

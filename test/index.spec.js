var assert = require('assert');
var isPositiveNumber = require('../index');

describe('is-positive-number', function() {
  it('should return true for positive numbers', function() {
    assert.equal(isPositiveNumber(1), true);
    assert.equal(isPositiveNumber(1.2), true);
    assert.equal(isPositiveNumber(Number(1)), true);
  });

  it('should return true for zero', function() {
    assert.equal(isPositiveNumber(0), true);
  });

  it('should return false for negative numbers', function() {
    assert.equal(isPositiveNumber(-1), false);
    assert.equal(isPositiveNumber(-1.2), false);
    assert.equal(isPositiveNumber(Number(-1)), false);
  });

  it('should throw a TypeError for non-numbers', function() {
    var helperFunction = function(n) {
      return function() {
        return isPositiveNumber(n);
      }
    };

    assert.throws(helperFunction({}), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
    assert.throws(helperFunction(false), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
    assert.throws(helperFunction(true), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
    assert.throws(helperFunction([]), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
    assert.throws(helperFunction({a:1}), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
    assert.throws(helperFunction('test'), TypeError,
      'Passed in object is not a number', 'is-positive-number/index.js');
  });
});

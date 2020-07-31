var assert = require('assert');
var largestPrime = require('../3.js')

describe.only('largestPrime()', function () {
  it('should return 2 for largestPrime(2)', function () {
    assert.equal(largestPrime(2), 2);
  });
  it('should return 3 for largestPrime(3)', function () {
    assert.equal(largestPrime(3), 3);
  });
  it('should return 5 for largestPrime(5)', function () {
    assert.equal(largestPrime(5), 5);
  });
  it('should return 7 for largestPrime(7)', function () {
    assert.equal(largestPrime(7), 7);
  });
  it('should return 2 for largestPrime(8)', function () {
    assert.equal(largestPrime(8), 2);
  });
  it('should return 29 for largestPrim(13195)', function () {
    assert.equal(largestPrime(13195), 29);
  });
  it('should return 6857 for largestPrime(600851475143)', function () {
    assert.equal(largestPrime(600851475143), 6857);
  });
});

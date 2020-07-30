var assert = require('assert');
var fibSum = require('../2.js')

describe('fibSum()', function () {
  it('should return 10 for fibSum(10)', function () {
    assert.equal(fibSum(10), 10);
  });
  it('should return 44 for fibSum(60)', function () {
    assert.equal(fibSum(60), 44);
  });
  it('should return 798 for fibSum(1000)', function() {
    assert.equal(fibSum(1000), 798);
  });
  it('should return 60696 for fibSum(100000)', function() {
    assert.equal(fibSum(100000), 60696);
  });
  it('should return 4613732 for fibSum(4000000)', function () {
    assert.equal(fibSum(4000000), 4613732);
  });
});

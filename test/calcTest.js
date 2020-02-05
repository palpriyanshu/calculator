const assert = require('assert');
const add = require('../calc/add.js');
const sub = require('../calc/sub.js');

describe('add', function() {
  it('should add two num', function() {
    assert.strictEqual(add(2, 3), 5);
  });
});

describe('sub', function() {
  it('should subtract two num', function() {
    assert.strictEqual(sub(5, 3), 2);
  });
});

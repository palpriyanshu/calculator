const assert = require('assert');
const add = require('../calc/add.js');

describe('add', function() {
  it('should add two num', function() {
    assert.strictEqual(add(2, 3), 5);
  });
});

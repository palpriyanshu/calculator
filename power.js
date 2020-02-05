const multiplication = require('./mul');

const sqr = function(a) {
  return multiplication(a, a);
};

const cube = function(a) {
  return multiplication(sqr(a), a);
};

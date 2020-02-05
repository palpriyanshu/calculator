const multiplication = require('./mul');

const sqr = function(a) {
  const square = multiplication(a, a);
  return square;
};

const cube = function(a) {
  return multiplication(sqr(a), a);
};

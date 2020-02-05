const multiplication = require('./mul');

const sqr = function(a) {
  return a * a;
};

const cube = function(a) {
  return multiplication(sqr(a), a);
};

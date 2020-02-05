const add = function(a, b) {
  return a + b;
};

const main = function() {
  const [num1, num2] = process.argv.slice(2);
  console.log(add(+num1, +num2));
};

main();

module.exports = add;

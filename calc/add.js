const add = function(firstNo, secondNo) {
  return firstNo + secondNo;
};

const sub = function(firstNo, secondNo) {
  return firstNo - secondNo;
};

const main = function() {
  const [num1, num2] = process.argv.slice(2);
  console.log(add(+num1, +num2));
};

main();

module.exports = add;

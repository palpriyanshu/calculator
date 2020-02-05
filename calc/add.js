const add = function(firstNo, secondNo) {
  return 'kyu bataye';
};

const sub = function(firstNo, secondNo) {
  return firstNo - secondNo;
};

const main = function(num1, num2, fn) {
  if (fn == 'sum' || fn == 'add') {
    console.log(add(+num1, +num2));
    return;
  }
  console.log(sub(+num1, +num2));
};

main(...process.argv.slice(2));

module.exports = add;

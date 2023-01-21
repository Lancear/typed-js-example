/** @type {import('./math')} */
const math = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = math;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return math.add(a, -b);
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return math.multiply(a, 1/b);
}


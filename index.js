module.exports = function (n) {
  if (!toString.call(n).toLowerCase().includes('number')) {
    throw new TypeError('Passed in object is not a number', 'is-positive-number/index.js');
  }
  return n >= 0;
}

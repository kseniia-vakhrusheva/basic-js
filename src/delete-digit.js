const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let lenght = n.toString().length;
  let max = 0;
  let cur = 0;
  for (let i = 0; i < lenght; i++) {
    cur = parseInt(n.toString().slice(0,i) + n.toString().slice(i+1));
    if (max < cur) {
      max = cur;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};

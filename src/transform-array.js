const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return arr;
  }

  const arrCopy = [];
  let discardNextFlag = false;
  let doublePrevFlag = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNextFlag) {
      discardNextFlag = false;
      continue;
    }

    if (doublePrevFlag) {
      arrCopy.push(arr[i - 1]);
      doublePrevFlag = false;
    }

    if (arr[i] === '--discard-prev') {
      if (i > 0) {
        arrCopy.pop();
      }
    } else if (arr[i] === '--discard-next') {
      if (i < arr.length - 1) {
        discardNextFlag = true;
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        arrCopy.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        doublePrevFlag = true;
      }
    } else {
      arrCopy.push(arr[i]);
    }
  }

  return arrCopy;
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');
  /**
   * Given a string, return its encoding version.
   *
   * @param {String} str
   * @return {String}
   *
   * @example
   * For aabbbc should return 2a3bc
   *
   */
  function encodeLine(str) {
    if (str === '') {
      return '';
    }
  
    let num = 1;
    let result = '';
  

    str += '#';
  
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] == str[i + 1]) {
        num = num + 1;
      } else {
        if (num > 1) {
          result = result + num + str[i];
        } else {
          result = result + str[i];
        }

        
        num = 1;
      }
    }
  
    return result;
  }
  
  module.exports = {
    encodeLine
  };
  
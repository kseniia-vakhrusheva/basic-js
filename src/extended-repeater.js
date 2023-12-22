const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let newAddition = '';
  if (addition) {
    newAddition = repeater(String (addition), {
      repeatTimes: additionRepeatTimes,
      separator: additionSeparator
    });
  }

  let newStr = '';
  for (let i = 0; i < repeatTimes; i++) {
    newStr += str + newAddition;

    if (i < repeatTimes - 1) {
      newStr += separator;
    }
  }

  return newStr;
}

module.exports = {
  repeater
};

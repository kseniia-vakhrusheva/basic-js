const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  const winter = 11;
  const spring =  2;
  const summer = 5;
  const autumn = 8;

  const month = date.getMonth();

  if (month >= spring && month < summer) {
    return 'spring';
  } else if (month >= summer && month < autumn) {
      return 'summer';
    } else if (month >= autumn && month < winter) {
      return 'autumn';
    } else {
      return 'winter'
    }
}

module.exports = {
  getSeason
};

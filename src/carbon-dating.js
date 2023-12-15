const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    const num_sampleActivity = parseFloat (sampleActivity);
    if (num_sampleActivity < MODERN_ACTIVITY && num_sampleActivity > 0 && !isNaN(num_sampleActivity)) {
      let t = (Math.log (MODERN_ACTIVITY / num_sampleActivity)) / 0.693 * HALF_LIFE_PERIOD;
      t = Math.ceil(t);
      return t;
    }
  }
    return false; 
}

module.exports = {
  dateSample
};

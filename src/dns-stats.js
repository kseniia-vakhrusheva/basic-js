const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (const domain of domains) {
    const parts = domain.split('.');
    let key = '';

    for (let i = 0; i < parts.length; i++) {
      key += `.${parts[i]}`;
      dnsStats[key] = (dnsStats[key] || 0) + 1;
    }
  }

  // Sort the keys before returning
  const sortedDNSStats = {};
  Object.keys(dnsStats).sort().forEach(key => {
    sortedDNSStats[key] = dnsStats[key];
  });

  return sortedDNSStats;
}

module.exports = {
  getDNSStats
};

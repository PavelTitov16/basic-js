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
  let array=[];
  let strArray = str.split('');
  let count = 1;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i + 1]){
    count++;
    } else {
      array.push(count, strArray[i]);
      count = 1;
    }
  }
  return array.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
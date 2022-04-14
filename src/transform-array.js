const {
  NotImplementedError
} = require('../extensions/index.js');

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
  if ((Array.isArray(arr))) {
    let transformedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i += 2;
      } else if (arr[i] === '--discard-prev') {
        transformedArray.pop();
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          transformedArray.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (transformedArray[i - 1] !== undefined) {
          transformedArray.push(transformedArray[i - 1] );
        }
      } else transformedArray.push(arr[i]);
    }
    return transformedArray;
  }
  else throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};


const highestProduct = (arr) => {
  // If less than 4, multiply all elements
  if (arr.length < 4) {
    return arr.reduce((a, b) => a * b)
  }
  // Sort by biggest first
  const sortedArr = arr.sort((a, b) => b - a);
  const arrLength = sortedArr.length;

  // Taking into account negative values
  const lowestTwo = sortedArr[arrLength - 1] * sortedArr[arrLength - 2];
  const highestTwo = sortedArr[0] * sortedArr[1];
  const secondHighest = sortedArr[1] * sortedArr[2];
  const productOfFirst3 = sortedArr[0] * sortedArr[1] * sortedArr[2]

  // Lowest two are negatives that makes the highest product with 
  // the biggest positive integer.
  if ((lowestTwo > highestTwo && sortedArr[0] > 0) ||
    (sortedArr[2] <= 0 && lowestTwo > 0 && sortedArr[0] >= 0) ||
    (lowestTwo > secondHighest && productOfFirst3 > 0)) {
    return lowestTwo * sortedArr[0];
  } 

  return productOfFirst3;
}

// Test output
console.log(highestProduct([1, 2, 3]));
console.log(highestProduct([100, 266, 0, -6, -2, -9]));
console.log(highestProduct([-1, -2, 3, 88, 99, 66]));
console.log(highestProduct([-100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, 2, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, 2, 3, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([20, 60, -2, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([1000, 2, 1, -3, -4]));
console.log(highestProduct([1000, 2, 0, -3, -4]));

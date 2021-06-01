
const highestProduct = (arr) => {
  // If less than 4, multiply all elements
  if (arr.length < 4) {
    return arr.reduce((a, b) => a * b)
  }
  // Sort by highest first
  const sortedArr = arr.sort((a, b) => b - a);
  const size = sortedArr.length;

  // Taking into account negative values
  const lowestTwo = sortedArr[size - 1] * sortedArr[size - 2];
  const highestTwo = sortedArr[0] * sortedArr[1];

  if (lowestTwo > highestTwo && sortedArr[0] > 0) {
    return lowestTwo * sortedArr[0];
  } 
    
  if (sortedArr[2] <= 0 && lowestTwo > 0) {
    if (sortedArr[0] >= 0) {
      return lowestTwo * sortedArr[0] 
    } else {
      return sortedArr[0] * sortedArr[1] * sortedArr[2];
    }
  }

  return sortedArr[0] * sortedArr[1] * sortedArr[2];
}

// Test output
console.log(highestProduct([1, 2, 3]));
console.log(highestProduct([100, 266, 0, -6, -2, -9]));
console.log(highestProduct([-1, -2, 3, 88, 99, 66]));
console.log(highestProduct([-100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, 2, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([0, 2, 3, -100, -2, -3, -88, -99, -6]));
console.log(highestProduct([20, 60, -2,-100, -2, -3, -88, -99, -6]));

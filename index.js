function hasTargetSum(array, target) {
 
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
      return true;
      }
    }
  }
  return false;
}

/*
  O(n^2)
  O(1)
  ---revisit this for better understanding
*/

/* 
  funtion takes in two arguments: an `array` and the `target index`
  
  if (i = 0, i < x, i++) and (j = i + 1, j < x, j++)
  
  
  if the sum of two indices === target sum
  if i + j === target
  return true
  else return false
*/

/*
  the function takes in two arguments, an array and a target 
  using the if loop to iterate the first half of the array then the second half of the array
  to evaluate if the sum of any two indices is equal to the target.
  if they are equal returns true otherwise returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 1300, 3800, 11, 1200], 5000));


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([123456, 9876, 739, 6598, 64523,], 198273));

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

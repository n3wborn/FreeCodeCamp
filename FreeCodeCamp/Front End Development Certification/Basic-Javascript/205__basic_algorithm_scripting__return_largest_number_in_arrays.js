/*
 * Return an array consisting of the largest number from each provided
 * sub-array. For simplicity, the provided array will contain exactly 4
 * sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop, and
 * access each member with array syntax arr[i].
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * Comparison Operators
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function largestOfFour(arr) {
  var largestArr = [0, 0, 0, 0];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestArr[i]) {
        largestArr[i] = arr[i][j];
      }
    }
  }
  return largestArr;
}

//test
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


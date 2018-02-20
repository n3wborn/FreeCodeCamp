/*
 * Return the remaining elements of an array after chopping off n elements
 * from the head.
 *
 * The head means the beginning of the array, or the zeroth index.
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

// test
slasher([1, 2, 3], 2);

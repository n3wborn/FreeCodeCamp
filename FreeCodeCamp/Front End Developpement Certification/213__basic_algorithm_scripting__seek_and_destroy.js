/*
 * You will be provided with an initial array (the first argument in the
 * destroyer function), followed by one or more arguments. Remove all elements
 * from the initial array that are of the same value as these arguments.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have to
 *  give the "good answer", maybe (surely) better solutions exists!
 */

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

//tests
destroyer([1, 2, 3, 1, 2, 3], 4, 5);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


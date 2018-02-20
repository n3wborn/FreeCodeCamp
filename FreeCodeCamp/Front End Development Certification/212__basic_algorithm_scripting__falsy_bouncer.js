/*
 * Remove all falsy values from an array.
 *
 * Falsy values in JavaScript are false, null, 0, ", undefined, and NaN.
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have to
 *  give the "good answer", maybe (surely) better solutions exists!
 */

function bouncer(arr) {
  return arr.filter(Boolean);
}

// tests
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);


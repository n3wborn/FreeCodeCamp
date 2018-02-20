/*
 * Check if a string (first argument, str) ends with the given target string
 * (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method, which was
 * introduced in ES2015. But for the purpose of this challenge, we would like
 * you to use one of the JavaScript substring methods instead.
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function confirmEnding(str, target) {
  return (str.substring(str.length - target.length) === target);
}

confirmEnding("Bastian", "n");


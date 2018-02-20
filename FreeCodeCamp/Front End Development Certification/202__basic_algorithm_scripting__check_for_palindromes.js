
/*
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward
 * and backward, ignoring punctuation, case, and spacing.
 *
 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces
 * and symbols) and turn everything lower case in order to check for
 * palindromes.
 *
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and
 * "race CAR" among others.
 *
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3
 * 3a2", and "2_A3*3#A2".
 *
 * Here are some helpful links:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function palindrome(str) {
  var re = /[\W_]/g;
  var inv = str.toLowerCase().replace(re, '');
  var rev = inv.split('').reverse().join('');
  return rev === inv;
}


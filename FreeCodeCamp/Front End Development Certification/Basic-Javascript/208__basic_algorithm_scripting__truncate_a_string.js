/*
 * Truncate a string (first argument) if it is longer than the given maximum
 * string length (second argument). Return the truncated string with a ...
 * ending.
 *
 * Note that inserting the three dots to the end will add to the string
 * length.
 *
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length in
 * determining the truncated string.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

//tests
truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);


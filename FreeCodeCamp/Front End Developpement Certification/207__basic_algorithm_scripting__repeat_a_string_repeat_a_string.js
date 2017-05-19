/*
 * Repeat a given string (first argument) num times (second argument). Return
 * an empty string if num is not a positive number.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function repeatStringNumTimes(str, num) {
  var myStr = "";
  if (num <= 0) {
    return "";
  } else {
    for (var i = num; i > 0; i--) {
      myStr += str;
    }
  }
  return myStr;
}

// test
repeatStringNumTimes("abc", 3);


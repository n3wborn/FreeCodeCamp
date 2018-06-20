/*
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function findLongestWord(str) {
  // vars
  var maxSize = 0;
  var myArr = str.split(" ");

  // loops over myArr
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i].length >= maxSize) {       // check each word's size
      maxSize = myArr[i].length;            // if greater, keep it
    }
  }
  return maxSize;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


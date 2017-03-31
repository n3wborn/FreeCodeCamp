/*
 * We will now use our knowledge of strings to build a "Mad Libs" style word
 * game we're calling "Word Blanks". You will create an (optionally humorous)
 * "Fill in the Blanks" style sentence.
 *
 * You will need to use string operators to build a new string, result, using
 * the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
 *
 * You will also need to use additional strings, which will not change, and
 * must be in between all of the provided words. The output should be a
 * complete sentence.
 *
 * We have provided a framework for testing your results with different
 * words. The tests will run your function with several different inputs to
 * make sure all of the provided words appear in the output, as well as your
 * extra strings.
 */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result = "Hi ! My name is " + myNoun + ". I'm not so " + myAdjective + \
			 " and I will " + myVerb + " very very " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("Donald", "bright", "be the most dangerous man in the world", "soon");

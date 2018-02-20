/*
 * Return true if the string in the first element of the array contains all of
 * the letters of the string in the second element of the array.
 *
 * For example, ["hello", "Hello"], should return true because all of the
 * letters in the second string are present in the first, ignoring case.
 *
 * The arguments ["hello", "hey"] should return false because the string
 * "hello" does not contain a "y".
 *
 * Lastly, ["Alien", "line"], should return true because all of the letters in
 * "line" are present in "Alien".
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have to
 *  give the "good answer", maybe (surely) better solutions exists!
 */

function mutation(arr) {

    // indexOf is case sensitive
    var secElem = arr[1].toLowerCase();
    var firstElem = arr[0].toLowerCase();

    // loop/check each char of the str (arr[1]) to compare
    for (i = 0; i < secElem.length; i++) {
        if (firstElem.indexOf(secElem[i]) < 0)
            return false;
    }
    return true;
}

//test
mutation(["hello", "hey"]);


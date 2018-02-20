/*
 * Write a function that splits an array (first argument) into groups the
 * length of size (second argument) and returns them as a two-dimensional
 * array.
 *
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have
 *  to give the "good answer", maybe (surely) better solutions exists!
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    myArr = [];
    for (var i = 0; i < arr.length; i += size) {
        myArr.push(arr.slice(i, i + size));
    }

    return myArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


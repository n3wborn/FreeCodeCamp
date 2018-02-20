/*
 * Compare two arrays and return a new array with any items only found in one
 * of the two given arrays, but not both. In other words, return the symmetric
 * difference of the two arrays.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 *
 * Note from n3wborn :
 * This solution works but does not seem nice to me. Really nicer solutions
 * must exist !
 */

function diffArray(arr1, arr2) {
    var newArr = [];
    var onlyInOne = [];
    var onlyInTwo = [];

    //check if only in arr1
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            // element doesn't exist in array2
            // so, push it to onlyInOne
            onlyInOne.push(arr1[i]);
        }
    }

    //check if only in arr2
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            // element doesn't exist in array1
            // so, push it to onlyInTwo
            onlyInTwo.push(arr2[j]);
        }
    }

    //Debug
    newArr = onlyInOne.concat(onlyInTwo);
    console.log("newArr =", newArr);
    return newArr;
}

//tests
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);


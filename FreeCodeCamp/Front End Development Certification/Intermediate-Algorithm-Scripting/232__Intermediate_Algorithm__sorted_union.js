/*
 * Write a function that takes two or more arrays and returns a new array of
 * unique values in the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included in
 * their original order, but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the final
 * array should not be sorted in numerical order.
 *
 * Check the assertion tests for examples.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 *
 */

function uniteUnique(arr) {
	// array where to store the result
	var myArr = [];

    // NOTE: il serait judicieux de trouver
    //  soit un moyen de reduire (reduce()) tous les arrays
    //  soit un moyen de boucler dans chaque array pour les reduire

    // pour chaque item inclus dans arr
    for (var i = 0; i < arr.length; i++)
	    // si cet item n'est pas present dans myArr
	    if (myArr.indexOf(arr[i]) === -1)
		    myArr.push(arr[i])


	return myArr;
}

//tests
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);   // [1, 3, 2, 5, 4]
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);   // [1, 3, 2, [5], [4]]
//uniteUnique([1, 2, 3], [5, 2, 1]);            // [1, 2, 3, 5]
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);  //[1, 2, 3, 5, 4, 6, 7, 8]


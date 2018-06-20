/*
 * Return the lowest index at which a value (second argument) should be
 * inserted into an array (first argument) once it has been sorted. The
 * returned value should be a number.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
 * greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the
 * array has been sorted it will look like [3,5,20] and 19 is less than 20
 * (index 2) and greater than 5 (index 1).
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have to
 *  give the "good answer", maybe (surely) better solutions exists!
 */

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // By defaut, sort does use unicode code point value, and for us, it does not do the job
  // as it would give us what this example shows :
  //        >> arr = [3, 2, 1, 30, 10, 20];
  //        >> myArr = arr.sort();
  //        >> console.log(myArr);
  //        <- [ 1, 10, 2, 20, 3, 30 ]
  //
  // So, first let's REALLY sort our array using a better sort function
  function compareNumbers(a, b) {
    return a - b;
  }
  myArr = arr.sort(compareNumbers);

  // Now, we have to loop (using "i" as an index) through each of it's value
  for (var i = 0; i < myArr.length; i++) {
    console.log("myArr =", myArr);
    //  and check if "num" is greater than the value stored at this index
    if (myArr[i] >= num) {
      console.log(arr[i], "is greater than", num, "so it must be inserted at index", i );
      return i;
    }
  } return myArr.length;
}


// test
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);


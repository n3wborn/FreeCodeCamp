/*
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * and all numbers between them.
 *
 * The lowest number will not always come first.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 *
 */

function sumAll(arr) {
    var sum = 0;

    // find max and min in arr
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });

    //loop through each num from min to max
    for (var i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

//tests
sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);


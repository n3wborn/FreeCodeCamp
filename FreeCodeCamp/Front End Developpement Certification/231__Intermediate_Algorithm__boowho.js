/*
 * Check if a value is classified as a boolean primitive. Return true or
 * false.
 *
 * Boolean primitives are true and false.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */

function booWho(bool) {
    return typeof bool === 'boolean';
}

booWho(null);

//tests
booWho(true)        //true
booWho(false)       //true
booWho([1, 2, 3])   //false
booWho([].slice)    //false
booWho({ "a": 1 })  //false
booWho(1)           //false
booWho(NaN)         //false
booWho("a")         //false
booWho("true")      //false
booWho("false")     //false

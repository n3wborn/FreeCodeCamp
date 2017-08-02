/*
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */

function fearNotLetter(str) {

    for(var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1);
        }
    }
    return undefined;
}

// tests
fearNotLetter("abce");				// "d"
fearNotLetter("abcdefghjklmno");	// "i"
fearNotLetter("bcd");				// undefined
fearNotLetter("yz");				// undefined


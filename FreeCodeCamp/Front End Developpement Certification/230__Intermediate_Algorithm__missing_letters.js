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
	var prev = str [0];
	var itented = "";
	var next = prev + 1;
	for (var i = 0; i < str.length; i++) {
		// compare str[n] and str[n + 1] and check if the next is the one
		// it must be in alphabetically order.
		// NOTE:
		//	str.charCodeAt(index) -> Need an index -> return integer
		//	String.fromCharCode(65, 66, 67) -> Need a unicode -> return char (ABC)
		//
		// DEBUG
		console.log("i ->", i);
		// prochain en fonction de l'alphabet -> String.fromCharCode(str.charCodeAt(i + 1))
		// prochain char -> str.charCodeAt(i + 1)
		// FIXME!
		//	 ↓
		console.log("String.fromCharCode(str.charCodeAt(i + 1)) ->", String.fromCharCode(str.charCodeAt(i + 1)));
		console.log("str.charCodeAt(i)",str.charCodeAt(i));
		console.log("str.charCodeAt(i + 1)",str.charCodeAt(i + 1));
		if (String.fromCharCode(str.charCodeAt(i + 1)) !== str.charCodeAt(i + 1)) {
			return String.fromCharCode(str.charCodeAt(i + 1));
		} else {
			return undefined;
		}
	}
}

// tests
fearNotLetter("abce");				// "d"
//fearNotLetter("abcdefghjklmno");	// "i"
//fearNotLetter("bcd");				// undefined
//fearNotLetter("yz");				// undefined


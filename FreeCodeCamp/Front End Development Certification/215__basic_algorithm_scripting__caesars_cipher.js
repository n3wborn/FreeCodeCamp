/*
 * One of the simplest and most widely known ciphers is a Caesar cipher, also
 * known as a shift cipher. In a shift cipher the meanings of the letters are
 * shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a
 * decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 *
 * Note from n3wborn :
 *  Here, we are free to choose whatever solution we want, we just have to
 *  give the "good answer", maybe (surely) better solutions exists!
 */

function rot13(str) { // LBH QVQ VG!

    // we put everything to upper case
    str = str.toUpperCase();
    var myStr = "";

    // loop through each char
    for (var i = 0; i < str.length; i++) {
        // if str[i] is between A-M
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
            myStr += String.fromCharCode(str.codePointAt(i) + 13);
        } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
            myStr += String.fromCharCode(str.codePointAt(i) - 13);
        } else {
            myStr += str[i];
        }
    }
    return myStr;
}


//test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


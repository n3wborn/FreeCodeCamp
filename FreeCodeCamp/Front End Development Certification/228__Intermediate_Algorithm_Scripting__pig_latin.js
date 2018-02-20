/*
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English
 * word, moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 */

function translatePigLatin(str) {
    var voy = ["a", "e", "i", "o", "u", "y"];

    if (voy.indexOf(str[0]) >= 0) {
        return str + "way";
    } else {
        if (voy.indexOf(str[0]) === -1 && voy.indexOf(str[1])  === -1) {
            return str.substr(2) + str[0] + str[1] + "ay";
        } else {
            return str.substr(1) + str[0] + "ay";
        }
    }
}

// tests
translatePigLatin("consonant");     // onsonantcay
translatePigLatin("california");    // aliforniacay
translatePigLatin("paragraphs");    // aragraphspay
translatePigLatin("glove");         // oveglay
translatePigLatin("algorithm");     // algorithmway
translatePigLatin("eight");         // eightway


/*
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 *
 * Here are some helpful links:
 *
 * http://www.mathsisfun.com/roman-numerals.html
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 */

function convertToRoman(num) {
    var numbers = num.toString().split('');
    var res = '';
    var thousands = ["", "M", "MM", "MMM"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    if (numbers.length == 4) {
        res = thousands[numbers[0]] + hundreds[numbers[1]] + tens[numbers[2]] + ones[numbers[3]];
    } else if (numbers.length == 3) {
        res = hundreds[numbers[0]] + tens[numbers[1]] + ones[numbers[2]];
    } else if (numbers.length == 2) {
        res = tens[numbers[0]] + ones[numbers[1]];
    } else if (numbers.length == 1) {
        res = ones[numbers[0]];
    }
    return res;
}




//tests
convertToRoman(36);
convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3999);


/*
 * The DNA strand is missing the pairing element. Take each character, get its
 * pair, and return the results as a 2d array.
 *
 * Base pairs (http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and
 * CG. Match the missing element to the provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for the input GCG, return ["G", "C"], ["C","G"],["G", "C"]]
 *
 * The character and its pair are paired up in an array, and all the arrays
 * are grouped into one encapsulating array.
 *
 * Here are some helpful links:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */

function pairElement(str) {

    var myArr = [];

    for (var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "A":
                myArr.push(["A", "T"]);
                break;
            case "C":
                myArr.push(["C", "G"]);
                break;
            case "G":
                myArr.push(["G", "C"]);
                break;
            case "T":
                myArr.push(["T", "A"]);
                break;
        }
    }

    return myArr;
}


//tests
pairElement("GCG");		// [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA");	// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG");	// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA");	// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]


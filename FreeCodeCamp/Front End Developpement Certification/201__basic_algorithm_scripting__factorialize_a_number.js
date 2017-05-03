/*
 * Return the factorial of the provided integer.
 *
 * If the integer is represented with the letter n, a factorial is the product
 * of all positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 *  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 * Note from n3wborn :
 *      Here, we are free to choose whatever solution we want, we just have
 *      to give the "good answer", maybe (surely) better solutions exists!
 */

function factorialize(num) {
    res = 1;
    for (i = 1; i <= num; i++) {
        res *= i;
    }
    num = res;
    return num;
}

factorialize(5);


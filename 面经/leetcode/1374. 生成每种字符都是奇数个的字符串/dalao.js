/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n%2 === 0) {
        return 'a' + 'b'.repeat(n-1);
    }
    return 'a'.repeat(n);
};

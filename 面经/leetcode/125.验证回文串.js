/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[\W_]/g, "")
    if (s.length < 2) {
        return true
    }
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] != s[right]) {
            return false
        }
        right--
        left++
    }
    return true
};
// @lc code=end
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxDiff = 0
    let minPrice = prices[0]
    // 优化 定义一个 存储
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[j] < minPrice) {
                minPrice = prices[j]
            }
            if (prices[j] - prices[i] > maxDiff) {
                maxDiff = prices[j] - prices[i]
            }
        }
    }
    return maxDiff
};
// @lc code=end
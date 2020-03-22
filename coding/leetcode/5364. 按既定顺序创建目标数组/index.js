/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let arr = []
    index.forEach((item, index) => {
        if (arr[item]) {
            arr.splice(index, 0, nums[index])
        } else {
            arr[item] = nums[index]
        }
        console.log(arr)
    })
    return arr
};
nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
console.log(createTargetArray(nums, index))
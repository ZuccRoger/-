function isLuckPackage(arr) {
    let totalSum = 0,
        totalMul = 1;
    arr.forEach((item, index) => {
        totalSum += item;
        totalMul = item * totalSum
    })
    if (totalMul > totalMul) {
        return true
    } else {
        return false
    }
}
// dfs?! 怎么那么难
console.log(isLuckPackage([1, 1, 2, 3]))
// 实现回文

var isPalindrome = function (x) {
    if (x < 0) return false
    let str = '' + x
    return Array.from(str).reverse().join('') === str
}

console.log(isPalindrome('level'))


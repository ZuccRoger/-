let arr = []
while (n = readline()) {
    arr.push(n.split(' ')[0])
}
arr.forEach((item, index) => {
    var num = []
    var s = String(item).split('').sort().join()
    var flag = true
    for (var i = 2; i < 10; i++) {
        var sum = item * i
        sum = String(sum).split('').sort().join()
        if (sum == s) {
            console.log("Possible")
            flag = false
            break
        }

    }
    if (flag) {  
        console.log("Impossible")
    }
})

/**
 * @description: 得到重排随机数
 * @param {type} 
 * @return {type} 
 */
function getRanOrderNum(number) {
    number = number.toString()
    // 先把 string 转化成数组 比如 123 => [1,2,3]
    // 通过数组 形成 123,132,213,231,312,321 6个数字 看是否macth
    // Q： 如何通过 [1,2,3] 如何无顺序重拍？
    //  
}


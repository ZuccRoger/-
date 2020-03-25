// 数组去重
[...new Set(array)]

function dedupe(array){
    return Array.from(new Set(array))
}

// 实现 并集、交集和差集
let a = new Set([1,2,3])
let b = new Set([4,3,2,])

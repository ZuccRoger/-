// // 数组去重
// [...new Set(array)]

// function dedupe(array) {
//     return Array.from(new Set(array))
// }

// [...new Set('ababbc')].join('')

// // 实现 并集、交集和差集
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2,])

let result = []
// 并集 
result = [...a, ...b]
// 交集 
let interSect = new Set([...a].filter(item => b.has(item)))
// 差集
let diffSect = new Set([...a].filter(item => !b.has(item)))



const a = {
    i: 1,
    valueOf: function () {
        return this.i++
    },
    toString: function () {
        return this.i
    }
}

// const a = {
//     i: 1,
//     toString: function () {
//         return this.i++
//     }
// }
//


// let temp = 1
// Object.defineProperty(window, 'a', {
//     get: function () {
//         return temp++
//     }
// })
// 

console.log(a == 1 && a == 2 && a == 3)
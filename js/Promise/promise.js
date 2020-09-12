// new Promise(A, B).then().catch(e) {
//     console.log(e)
// }

// function A() {
//     console.log('A')
// }

// function B() {
//     console.log('B')
// }
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values)
// })

// const promiseA = Promise.resolve('A')
// const promiseB = Promise.resolve('B')
// const promiseC = Promise.resolve('C')
// Promise.all([promiseA, promiseB, promiseC]).then(values => {
//     console.log(values)
// })

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
    reject('reject');
});
Promise.all([p1, p2, p3]).then(res => {
    console.log(res)
})
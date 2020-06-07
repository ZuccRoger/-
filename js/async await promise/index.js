//normal 
// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms)
//   })
// }
// 由于 async return Promise 对象所以 可以简写为 
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 50)


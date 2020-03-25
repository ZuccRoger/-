var f = v => v
// 等价于 var f = function (v) {
//     return v
// }

// 可以简化回调函数
    [1, 2, 3].map(function (x) {
    return x * x
})

//箭头函数写法
    [1, 2, 3].map(x => x * x)

//箭头函数注意事项
// this对象就是定义时所在的对象，而不是使用时所在的对象, 因为箭头函数根本没有this，所以不能作为构造函数，它所在执行的地方就是他的this
var id = 21
foo.call({id: 42})

//箭头函数转成ES5的写法
function foo() {
    setTimeout(() => {
        console.log('id:' + this.id)
    }, 100)
}

//ES5
function foo() {
    var _this = this;
    setTimeout(function () {
        console.log('id:', _this.id)
    })
}

function factorial(n, total) {
    if (n === 1) return total
    return factorial(n - 1, n * total)
}

console.log(factorial(5, 1))

// 函数编程柯里化
// 将多参数的函数转换成单参数的函数

function createFunction() {
    var result = new Array()
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i
        }()
    }
    return result
}

console.log(createFunction())
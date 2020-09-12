function person(a, b, c, d) {
    return {
        name: this.name,
        a,
        b,
        c,
        d
    }
    // console.log(this.name)
    // console.log(arguments)
    // console.log(a, b, c, d)
}

var egg = {
    name: '蛋老师'
}

Function.prototype.newCall = function(obj) {
    var obj = obj || global
    obj.p = this
    var newArguments = []
    for (var i = 1; i < arguments.length; i++) {
        newArguments.push('arguments[' + i + ']')
    }
    eval('obj.p(' + newArguments + ')')
    delete obj
}

Function.prototype.newApply = function(obj, arr) {
    var obj = obj || global
    obj.p = this
    if (!arr) {
        result = obj.p()
    } else {
        var newArguments = []
        for (var i = 0; i < arr.length; i++) {
            newArguments.push('arr[' + i + ']')
        }
        result = eval('obj.p(' + newArguments + ')')
    }
    delete obj.p
    return result
}

Function.prototype.newBind = function(obj) {

}

let bibi = person.newApply(egg, ['网易云音乐', '我要来了'])
console.log(bibi)


function test() {
    // console.log(arguments)
    let arr = Array.prototype.slice.call(arguments)
    console.log(arr)
}
test(1, 2, 3, 4, 5)


// let arr = [1, 2, 3, 4, 5]
// let sum = 0;
// sum = arr.reduce(function(prev, curr) {
//     return prev + curr
// })
// console.log(sum)

// function foo() {
//     var a = 1
//     var b = a
//     a = 2
//     console.log(a)
//     console.log(b)
// }
// foo()

// function book() {
//     var a = 'test '
// }
// console.log(a)

var xm = {
    name: "xm",
    age: 30,
    cars: {
        bmw: "30w",
        bench: "60w",
        info: {
            d: 'ddd'
        }
    },
    d: function() {
        console.log('d')
    }
}

function deep(obj) {
    if (obj === null) return null
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof RegExp) return new Date(obj)

    if (typeof(obj) !== 'object') {
        return obj
    }
    let temp = {}
    for (let i in obj) {
        temp[i] = deep(obj[i])
    }
    return temp
}
let afterObj = deep(xm)
afterObj.age = 50
afterObj.cars.bench = '60y'
console.log(afterObj, xm)



function foo() {
    var myName = "极客时间"
    let test1 = 1
    const test2 = 2
    var innerBar = {
        setName: function(newName) {
            myName = newName
        },
        getName: function() {
            console.log(test1)
            return myName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName("极客邦")
bar.getName()
console.log(bar.getName())
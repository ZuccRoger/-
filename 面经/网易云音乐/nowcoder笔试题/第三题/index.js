var n = '';
const aimArr = ['a', 'b', 'c', 'x', 'y', 'z']
let letterTimes = []
let lengthArr = []
let luckyStr = ''
while (n = readline()) {
    n.split(' ').forEach((item) => {
        luckyStr = item
    })
}

function getDiffLength(letter) {
    let first = luckyStr.indexOf(letter)
    let last = luckyStr.lastIndexOf(letter)
    return last - first + 1
}

function getMaxFromArr(arr) {
    arr = JSON.parse(JSON.stringify(arr))
    arr.sort((a, b) => {
        return b - a
    })
    return arr[0]
}
// 1. 检查出现的次数 
// 把 多出现的一次 丢掉
function checkoutTimes(str) {
    let arr = str.split('')
    for (let letter of aimArr) {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == letter) {
                count++
            }
        }
        if (count % 2 == 1) {
            letterTimes.push(true)
        } else {
            letterTimes.push(false)
        }
    }
}

function popLetterFromStr() {
    let arr = luckyStr.split('')
    // console.log('letterTimes', letterTimes)
    for (let index in letterTimes) {
        if (letterTimes[index]) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == aimArr[index]) {
                    arr[i] = '0'
                    break
                }
            }
        }
    }
    luckyStr = arr.join("")
}

checkoutTimes(luckyStr)
popLetterFromStr()
console.log('luckyStr', luckyStr)

for (let i of aimArr) {
    lengthArr.push(getDiffLength(i))
}

console.log(getMaxFromArr(lengthArr))
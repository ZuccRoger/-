var n = parseInt(readline().split(" ")[1]);
var ans = 0;

let leftArr = []
let rightArr = []
let total = 0

let arr = []
for (var i = 0; i < n; i++) {
    lines = readline().split(" ")
    leftArr.push(parseInt(lines[0]))
    rightArr.push(parseInt(lines[2]))
}
console.log(leftArr, rightArr, arr)
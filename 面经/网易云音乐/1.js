// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
let obj = {}
for (var i = 0; i < n; i++) {
    lines = readline().split(" ")
    for (var j = 0; j < lines.length; j++) {
        //console.log(lines[j])
        obj[lines[j]] >= 1 ? give(obj, lines[j]) : obj[lines[j]] = 1
    }
}

function give(obj, key) {
    let num = obj[key]
   // console.log(num)
    num++
    obj[key] = num
}

let count = 0 

let valueArr = Object.values(obj)a
//console.log(JSON.stringify(valueArr))
valueArr.map(item=>{
    if((item/n)>=0.01){
        count++
    }
})
if(n==1) print(1)
///print(Object.keys(obj).length)
print(count)
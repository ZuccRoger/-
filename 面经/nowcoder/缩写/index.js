while (n = readline()) {
    let inputArr = n.split(' ')
    let finalStr = ''
    for(let str of inputArr){
        finalStr += str[0]
    }
    console.log(finalStr)
}

/*
    这里通过 for of  去代替了 for 每个的
    减少了很多的代码量
     for (let i = 0; i < inputArr.length; i++) {
         finalStr += inputArr[i][0]
     }
*/
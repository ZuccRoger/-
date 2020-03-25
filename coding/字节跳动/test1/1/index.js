var n = parseInt(readline());
var ans = 0;
let arr={
}
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        arr.hasOwnProperty([lines[j+1]])?arr[lines[j+1]].push(lines[j]):(arr[lines[j+1]]=Array.of(lines[j]))
        break
    }
}
for(let key in arr){
    arr[key]=arr[key].sort()
    let set = new Set(arr[key])
    arr[key] = Array.from(set)
    print(key+' '+arr[key].toString().replace(/,/g," "))
}

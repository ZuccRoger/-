## 牛客网js标准输入输出
```
while(line=readline()){
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}
```
### 输入一行 ，拿到所有的
```
var n = '';
while(n = readline()){
    n.split(' ').forEach((item)=>{
        if(ingredients.indexOf(item) == -1){
            ingredients.push(item);
        }
    })
}
```

### 输入 n行 然后  每行
```
let arr = []
let n = parseInt(readline())
for(var i=0;i<n;i++){
    arr.push(parseInt(readline()))
}
```
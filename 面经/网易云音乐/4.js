// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
for (var i = 0; i < n; i++) {
    lines = readline().split(" ")
    for (var j = 0; j < lines.length; j++) {
        if (lines[0] == 1 && lines[1] == 1) {
            console.log(1)
            return
        }
    }
}
//print(ans)
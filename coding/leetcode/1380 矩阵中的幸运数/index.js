var luckyNumbers  = function(matrix) {
    let length= matrix[0].length
    let result=[]
    matrix.map((item,index)=>{
        let temp = Math.min(...item)//然后找到 temp是第几列的
        let markColumn=0
        for(let i=0;i<item.length;i++){
            for (let j=0;j<matrix.length;j++){
                if(matrix[j][i]==temp){
                    markColumn=i
                    break
                }
            }
        }
        let arr =[]
        for(let i=0;i<matrix.length;i++){
            arr=[...arr,matrix[i][markColumn]]
        }
        if(temp==Math.max(...arr)){
            result.push(temp)
        }
    })
    return result
};
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))


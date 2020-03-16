    var line0,line1,line2
    let i=0
    while(line=readline()){
        var lines = line.split(" ");
        if(i==0){
            line0=lines
        }else if(i==1){
            line1 =lines
        }else{
            line2=lines
        }
        i++
    }
    let need = line0[0]-line0[1]
    let result,flag=1
    // line2.map((item,index)=>{
    //     if(item>=need){
    //         result=index
    //         flag=1
    //     }
    // })
    if(flag==1){
        let line2_backup = line2
        let finalArr=[]
        line2.sort((a,b)=>{
            return b-a
            }
        )
        // console.log(line2)
        line2.forEach((item)=>{
            if(need>=0){
                need=need-item
                finalArr.push(item)
            }
        })
        // console.log(finalArr)
        let ddddArr=[]
        line2_backup.forEach((item,index)=>{
            finalArr.forEach((item2)=>{
                if(item2==item){
                    ddddArr.push(line1[index])
                }
            })
        })
        print(ddddArr)
    }else(
        print(-1)
    )



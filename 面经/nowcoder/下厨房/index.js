var ingredients = [];
var n = '';
while(n = readline()){
    n.split(' ').forEach((item)=>{
        if(ingredients.indexOf(item) == -1){
            ingredients.push(item);
        }
    })
}
console.log(ingredients.length)
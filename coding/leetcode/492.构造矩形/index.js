/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let temp = Math.ceil(Math.sqrt(area))
    for(let i = temp;i<=area;i++){
        if(Number.isInteger(area/i)){
            return [i,area/i]
        }
    }
};
console.log(constructRectangle(5))

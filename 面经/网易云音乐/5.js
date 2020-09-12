/**
 * @description: 前提条件A 找出数字 并且 它的概率>50%
 *               并且需要保证 时间复杂度O(n) 空间复杂度O(1)
                 即 遍历一遍 就能成功找到 
 * @param {type} 
 * @return {type} 
 */
function getMax(arr) {
    let arrBackup = JSON.parse(JSON.stringify(arr))
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1]) {
            arrBackup.splice(j, 2)
            i++;
        } else {
            j++
        }
    }
    console.log(arrBackup[0])
}

getMax([5, 1, 5, 4, 5, 4, 5])
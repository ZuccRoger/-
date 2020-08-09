let arr = [99999999,9999200, 999100000,9999999100, 200000000]
let easyNum = arr[0] + arr[1]
let middleNum = arr[1] + arr[2] + arr[3]
let hardNum = arr[3] + arr[4]
let minMax = Math.min(...[easyNum, middleNum, hardNum])
let minx = Math.min(..arr)


function getMax(arrBackup, minMax) {
    let arr = []
    for (; minMax > minx; minMax--) {
        arr = JSON.parse(JSON.stringify(arrBackup))
        //保证 hard
        if (arr[4] <= minMax && arr[4] + arr[3] >= minMax) {
            arr[3] -= (minMax - arr[4])
            
        }
        if (arr[0] <= minMax && arr[0] + arr[1] >= minMax) {
            arr[1] -= (minMax - arr[0])
        }
        if (arr[1] + arr[2] + arr[3] >= minMax) {
            return minMax
        }
        arr = null
    }
    return minMax
}
console.log(getMax(arr, minMax))
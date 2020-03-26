// 数组中取出一个数作为基准(pivot)。
// 在原数组中进行移动，将大于基准的数放到基准右边，小于基准的数放到基准左边，在基准左右形成两个子数组。
// 在左右子数组中反复执行步骤1、2，直到所有子数组只剩下一个数。

function quickSort(arr, i, j) {
    if(i < j) {
      let left = i;
      let right = j;
      let pivot = arr[left];
      while(i < j) {
        while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
          j--;
        }
        if(i < j) {
          arr[i++] = arr[j];
        }
        while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
          i++;
        }
        if(i < j) {
          arr[j--] = arr[i];
        }
      }
      arr[i] = pivot;
      quickSort(arr, left, i-1);
      quickSort(arr, i+1, right);
      return arr;
    }
  }
  
  // example
  let arr = [2, 10, 4, 1, 0, 9, 5 ,2];
  console.log(quickSort(arr, 0 , arr.length-1));
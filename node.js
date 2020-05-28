

function binarySearch(arr, item) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2)
    let guess = arr[mid]
    if (guess == item) {
      return mid
    } else if (guess > item) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return 'тут нихера нет'
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19))
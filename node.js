function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      let check = 0;
      for (let g = 0; g < arr[i].length; g++) {
        if (arr[i][g] == elem) {
          check = 1;
        }
      }
      if (check == 0) {
        newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
  
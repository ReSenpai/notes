function increasingTriplet(nums: number[]): boolean {
  const arr = [[nums[0]]];

  for (let i = 0; i < nums.length; i++) {
    const matchedNums: number[][] = [];
    for (let j = 0; j < arr.length; j++) {
      if (nums[i] > arr[j][arr[j].length - 1]) {
        if (arr[j].length > 1) {
          return true;
        }

        matchedNums.push([...arr[j]]);
        arr[j].push(nums[i]);
      }
    }

    arr.push(...matchedNums);
    const targetStr = JSON.stringify([nums[i]]);
    const duplicate = arr.some(
      (subArr) => JSON.stringify(subArr) === targetStr
    );

    if (!duplicate) {
      arr.push([nums[i]]);
    }
  }

  return false;
}

// 19 < 30 > 20 < 100 > 10 < 12 > 5 < 13 ->

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
console.log(increasingTriplet([6, 7, 1, 2])); // false
console.log(increasingTriplet([1, 2, 1, 3])); // true
console.log(increasingTriplet([1, 5, 0, 4, 1, 3])); // true
console.log(increasingTriplet([5, 1, 5, 5, 2, 5, 4])); // true

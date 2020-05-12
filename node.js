function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice()
  result.splice(n, -1, ...arr1)
  return result

  // return arr2.slice().splice(n, -1, ...arr1);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


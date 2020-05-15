function bouncer(arr) {

  let myArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      myArr.push(arr[i])
    }
  }

  return myArr
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));


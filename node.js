function findOdd(A) {
    
  let newArr = [...A]

  for (let i = 0; i < newArr.length; i++) {
      const result = newArr.filter(num => num === newArr[i]);
      console.log(result)
  }
  
  newArr
  
  return 0;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


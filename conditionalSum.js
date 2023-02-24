const conditionalSum = function(values, condition) {
  // create an empty variable to store the empty sum 
  let sum = 0;
  
  // find whether to sum even or odd numbers
  let conditional = condition === "even" ? 0 : 1; 

  // loop through the values array 
  for (let i = 0 ; i < values.length ; i++){
    // if the number matches the condition add to sum
    if (values[i] % 2 === conditional){
      sum += values[i];
    }
  } 

  // return the final sum
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0 
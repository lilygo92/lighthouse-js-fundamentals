const sumLargestNumbers = function(data) {
  // create an empty variable to hold the final sum
  let sum = 0;

  // create variables to hold the two biggest integers
  let num1 = 0;
  let num2 = 0;

  // loop through the data array 
  for (let i = 0 ; i < data.length ; i++){

    // conditional to check for the biggest integer
    if (data[i] > num1){
      num1 = data[i];
    }
  }
  // loop through the data array 
  for (let i = 0 ; i < data.length ; i++){
    // conditional to check for the second biggest integer
    if (data[i] > num2 && data[i] < num1){
        num2 = data[i];
    }
  }

  // sum the two biggest integers 
  sum = num1 + num2 ; 
  // return final sum
  return sum;
};

console.log(sumLargestNumbers([1, 10])); //return 11
console.log(sumLargestNumbers([1, 2, 3])); // return 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //return 126
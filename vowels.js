const numberOfVowels = function(data) {
  // variable to store final number of vowels
  let vowels = 0;

  // loop through each letter in data string
  for (i = 0 ; i < data.length ; i++){
    // add +1 to vowels if vowel 
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u'){
      vowels += 1;
    }
  }

  // return final number of vowels
  return vowels; 
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5
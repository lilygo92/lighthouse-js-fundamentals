const checkAir = function (samples, threshold) {
  let dirtySample = 0;

  // loop through samples array
  for (i = 0 ; i < samples.length ; i++){

    // find the amount of dirty in samples
    if (samples[i] == "dirty"){
      dirtySample += 1;
    }
  }
    // divide by total length of samples
    let pollutionLevel = (dirtySample / (samples.length));

    // conditional to check against threshold
    if (pollutionLevel > threshold){
      return "Polluted";

    } 

  return "Clean"; 
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // Clean
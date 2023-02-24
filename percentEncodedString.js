const urlEncode = function(text) {
  // trim any whitespace off initial text string and split into an array
  let url = text.trim().split("");
  // loop through the string
  for (i = 0 ; i < url.length ; i++){
    // change all empty spaces to %20
    if (url[i] === " "){
      url[i] = "%20";
    }
  }

  // return final url as a string
  return url.join("");
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs 
console.log(urlEncode("blue is greener than purple for sure")); //  blue%20is%20greener%20than%20purple%20for%20sure
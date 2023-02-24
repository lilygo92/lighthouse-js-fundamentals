const instructorWithLongestName = function(instructors) {
  // empty variables to store length of name and object
  let longestName = 0
  let instructor 
  
  // loop through the instructors array
  for (let i = 0 ; i < instructors.length ; i++){
    // find the index of the object with the longest "name" string 
    if (instructors[i]["name"].length > longestName){
      longestName = instructors[i]["name"].length;
      instructor = instructors[i];
    } 
  }
  // return object with longest name 
  return instructor 
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // {name: "Domascus", course: "Web"}
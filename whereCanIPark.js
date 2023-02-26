const whereCanIPark = function (spots, vehicle) {
  // empty array 
  let freeSpots = false;
  let vehicleSpots = []

  // conditional to check potential spots based on vehicle type
  if (vehicle == "motorcycle"){
    vehicleSpots = ["R" , "S" , "M"];
  } else if (vehicle == "regular"){
    vehicleSpots = ["R"];
  } else if (vehicle == "small"){
    vehicleSpots = ["R" , "S"];
  }

  // nested for loop to sort through each spots array
  for (let i = 0 ; i < spots.length ; i++){
    for (let j = 0 ; j < spots[i].length ; j++){
      // conditional to check for uppercase available spots 
      if (vehicleSpots.includes(spots[i][j])){
        freeSpots = [j , i];
        return freeSpots; 
      }
    }
  }

  // return false if no available space
  return freeSpots;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
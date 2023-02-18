const calculateCircleArea = (r) => {
  if (r <= 0){
    return undefined;
  }
  return (Math.pow(r, 2)*Math.PI);
}
const calculateRectangleArea = (h , l) => {
  if (h <= 0 || l <= 0){
    return undefined;
  }
  return (h * l);
}

const calculateTriangleArea = (h , l) => {
  if (h <= 0 || l <= 0){
    return undefined;
  }
  return (h * l * 0.5);
} 


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

 
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined 

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
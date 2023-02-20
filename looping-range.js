const range = (start , end , step) => {
  let arr = [];
  if (step <= 0 || start > end || start === undefined || end === undefined || step === undefined){
    return arr;
  }
  for (let i = start ; i <= end ; i += step){
    arr.push(i);
  }
  return arr; 
}

function circularArrayRotation(arr, rotationCount) {
  for(let i = 1; i<=rotationCount;i++){
    let pop  = arr.pop();
    arr.unshift(pop);
  }
  return arr;
}

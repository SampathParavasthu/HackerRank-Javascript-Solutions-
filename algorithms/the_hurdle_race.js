function hurdleRace(n,k,height){

  let MaxHeightOfHurdle = Math.max(...height);
  return (MaxHeightOfHurdle - k) >0 ? MaxHeightOfHurdle - k: 0;

}

let result = hurdleRace(5,4,[1,6,3,5,2]);
result;

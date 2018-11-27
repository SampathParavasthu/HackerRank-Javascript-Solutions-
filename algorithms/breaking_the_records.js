function getRecord(scores) {
  let max = 0,
      min = 0,
      inc = [],
      dec = [];

scores.forEach((score,index) =>{
  if(index==0){
    max = score;
    min = score;
  }
  else if(score>max){
    max = score;
    inc.push(score);
  }else if(score<min){
    min = score;
    dec.push(score);
  }
});

  return (`${inc.length} ${dec.length}`);

}

let result = getRecord([10,5,20,20,4,5,2,25,1]);
result;

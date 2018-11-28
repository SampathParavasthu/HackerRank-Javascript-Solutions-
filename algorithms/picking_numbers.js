function pickingNumbers(val){
  let count ;
  let arr = [];
  val.sort((x,y)=>{
    return x-y;
  });
    for (var i = 0; i < val.length; i++) {
      count = 1;
      for (var j = i+1;j<=val.length-1;j++){
        if(Math.abs(val[i]-val[j])<=1){
          count++;
        }
      }
      arr.push(count);
    }
    return Math.max(...arr);
}

let result = pickingNumbers([4,6,5,3,3,1]);
result;

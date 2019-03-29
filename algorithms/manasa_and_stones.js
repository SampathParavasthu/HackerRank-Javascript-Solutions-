stones = (n, a, b) => {
  let count = n -1;
  let arr = [];
  let min = a;
  let max = b;
  for (var i = 0; i <= count; i++) {
    let sum = (min * (count - i)) + (max * (i));
    if(arr.indexOf(sum)){
      arr.push(sum);
    }  
  }
  return arr.sort((a,b)=>a-b);
}

let resultOne = stones(309,4,3);
let resultTwo = stones(4,10,100);

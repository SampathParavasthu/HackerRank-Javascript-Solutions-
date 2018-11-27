function divisibleSumPairs(n,k,arr){
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if((arr[i]+arr[j]) % k === 0){ count += 1;}   
    }
  }
 return count;
}

var result = divisibleSumPairs(6,3,[1,3,2,6,1,2]);
result;

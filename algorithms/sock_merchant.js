let sockMerchant = (num,socks)=>{
  let pairs = {},
      valuedPairs=[],
      count = 0;
   socks.forEach(sock=>{
    pairs[sock] = (pairs[sock] || 0) + 1;
  });

 for (var key in pairs) {
   valuedPairs.push(pairs[key]);
 }

 valuedPairs.forEach(x=>{
   if(x>1){
    count += Math.floor(x/2);
  }
 });
  return count;
};

let result = sockMerchant(9,[10,20,20,10,10,30,50,10,20]);
result;

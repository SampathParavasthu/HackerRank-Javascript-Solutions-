var solve = (n,s,d,m) =>{

if(s.length === 1){
  if(s.includes(d)){
    return 1;
  }else{
    return 0;
  }
}else{
  return s.reduce((counter,val,indx,arr)=>{
    arr.slice(indx,indx+m)
    .reduce((a,b,inde,arra)=>{
        if(arra.length===m){
            if(a+b === d && inde === m-1){
              counter += 1;
            }
    return a+b;
        }

    });
      return counter;
    },0);
  }
};
  
var result = solve(5,[1,2,1,3,2],3,2);
result;

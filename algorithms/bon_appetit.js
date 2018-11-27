let bonAppetit = (n,k,arr,b)=>{
  let total=()=>{
    return arr.reduce((acc,val)=>acc+val,0);
  };

  if((total()-arr[k])/2 === b){
    return `Bon Appetit`;
  } else{
    return (total()/2) - ((total()-arr[k])/2);
  }
};

let result = bonAppetit(4,1,[3,10,2,9],12);
result;

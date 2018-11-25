function sumOfArray(arr){
  var newNumber = 0;
  arr.forEach(function(val){
    newNumber += val; 
  });
    return newNumber;
}

var res = sumOfArray([1,1,2,2]);
console.log(res);

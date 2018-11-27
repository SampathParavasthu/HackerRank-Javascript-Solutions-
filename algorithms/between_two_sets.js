let sort = function(min,max){
  let possibleNum =[];
  for (var i = max; i <= min; i++) {
    possibleNum.push(i);
  }
  return (possibleNum);
};


function factor(a, b) {
  let arr_max = Math.max(...a),
      arr_min = Math.min(...b);
      let datas = sort(arr_min,arr_max).filter(function(data){
        return a.every(function(value){
          return data % value ===0;
        }) && b.every(function(val){
          return val % data === 0;
        });
      });
      return datas.length;
}

let result = factor([2,4],[16,32,96]);
result;

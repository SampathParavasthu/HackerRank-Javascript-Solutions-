function bigSum(val_1,val_2){
  var totalSum=0;
	val_2.forEach(function(data){
		totalSum += data;
	})
	return totalSum;
}

var result = bigSum(5,[1000000001,1000000002,1000000003,1000000004,1000000005]);
result;


function minMax(arr){

	var total = arr.reduce(function(acc,data,index,array){
		return acc += data;
	},0)
  
	var maxValue = arr.reduce(function(first , second){
		return Math.max(first , second);
	}) 

	var minValue = arr.reduce(function(first , second){
		return Math.min(first , second);
	})

  console.log(total - maxValue , total - minValue);
}

minMax([1,2,3,4,5]);

function solve (grades) {
    return grades.map(function(data,indx,arr){
		var div = Math.floor(data/5) + 1;
		var nextValue = div*5;
		if(nextValue-data < 3 && data >=38){
			return nextValue;
		}else if(data < 38){
			return data;
		}else{
			return data;
		}
	});
}

var result = solve([4,73,67,38,33]);
result;

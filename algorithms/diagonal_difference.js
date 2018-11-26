function diagonalSum (val) {

var listOfArray = arguments[1];
var diagonalArray_1 =[];
var diagonalArray_2 =[];

for (var i = 0; i < listOfArray.length; i++) {
	diagonalArray_1.push(listOfArray[i][i]);
	diagonalArray_2.push(listOfArray[i][listOfArray.length-i-1]);
}

var sum_1 = diagonalArray_1.reduce(function(a,b){
	return a+b;
});

var sum_2 = diagonalArray_2.reduce(function(a,b){
	return a+b;
});

var totalDiagonalValue = Math.abs(sum_1 - sum_2);
	return totalDiagonalValue;
}

var result = diagonalSum([[11,2,4],[4,5,6],[10,8,-12)]];
result;

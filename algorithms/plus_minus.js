function checkSign (num,arr) {
	
	var countForPos =0;
	var countForNeg =0;
	var countForZeo =0;

	arr.forEach(function(data){
		switch(true){

			case Math.sign(data)===1:
			countForPos++;
			break;

			case Math.sign(data)===-1:
			countForNeg++;
			break;

			case Math.sign(data)===0:
			countForZeo++;
			break;

		}
	})

	return countForPos/num + "\n" + countForNeg/num  + "\n" + countForZeo/num; 

}

var result = checkSign(6,[-4,3,-9,0,4,1]);
result;

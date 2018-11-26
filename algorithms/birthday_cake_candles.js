function birthdayCake (num,height) {

if(height.length === num){
	var maxHeight = Math.max(...height);

	function filteredArray(element,index,array){
		return element === maxHeight;
	} 

	var newNum = height.filter(filteredArray);

	return newNum.length;
  }else{
	  console.log(`array does not match`)
  }

}

var result = birthdayCake(4,[3,2,1,3]);
result;

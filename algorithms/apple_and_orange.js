function applesAndOranges (s,t,a,b,m,n,apple,orange){
    
	function appleDistance(cur,index,arr){
		return a + cur >= s && a + cur <= t ;
	}

	function orangeDistance(cur,index,arr){
		return b + cur >= s && b + cur <= t;
	}

    var appleArray = apple.filter(appleDistance).length;
    var orangeArray=  orange.filter(orangeDistance).length;
    
    return (`${appleArray}\n${orangeArray}`);
}

var result = applesAndOranges(7,11,5,15,3,2,[-2,2,1],[5,-6]);
result;

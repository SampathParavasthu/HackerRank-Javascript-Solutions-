function processData(input) {
    let valleyCount = 0;
    let totalCount = 0;
    Array.from(input.split('\n')[1]) 
        .forEach(val=>{
        if(val === "U"){
            valleyCount++
            if(valleyCount === 0){
                totalCount++
            }

        }else{
            valleyCount--;
        }
    })
  console.log(totalCount) ;
} 

processData('UDDDUDUU')

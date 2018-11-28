function getMoneySpent(keyboards, drives, s){
    let sumOfAll = [];
    keyboards.forEach(key=>{
        drives.forEach(driv=>{
           if((key+driv)<=s){
            sumOfAll.push(key+driv) 
           }   
        })
    })  
    return Math.max(...sumOfAll)>0?Math.max(...sumOfAll):-1;
}

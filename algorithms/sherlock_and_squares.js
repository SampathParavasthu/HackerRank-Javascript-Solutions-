function squares(a, b) {
    let count=0;
    let lowerSqrtValue =Math.ceil(Math.sqrt(a)) 
    let upperSqrtValue =Math.floor(Math.sqrt(b)) 
   return upperSqrtValue - lowerSqrtValue + 1;
}

let result = squares(3,9);
result;

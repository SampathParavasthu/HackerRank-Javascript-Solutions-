function processData(input) {
    
  let initalValue = 5;
  let days = parseInt(input);
  let deafult = 0;
  let total = 0;
  for (var i = 0; i < days; i++) {
    deafult = Math.floor(initalValue/2);
    initalValue = deafult * 3;
    total += deafult;
  }
  console.log(total);
} 

function processData(value) {
    let arr = value.split(' ');

  let start = parseInt(arr[0]);
  let end = parseInt(arr[1]);
  let divisble = parseInt(arr[2]);
  let count = 0;
  for (var num = start; num <= end; num++) {
    let diff = num - parseInt((num).toString().split('').reverse().join(''));
    if(Number.isInteger(Math.abs(diff)/divisble))
      count++;
  }
  console.log(count++);
} 

function strangeCounter(t) {
  let time = t;
  let value = 3;
  while (time > value){
    time = time - value;
    value = value * 2;
  }
  return value - time + 1;
}


let result = strangeCounter(4);
result;

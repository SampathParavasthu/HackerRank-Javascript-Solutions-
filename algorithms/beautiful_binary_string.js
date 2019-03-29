let beautifulBinaryString = (b)=> {
  let strB = ''+b;
  return strB.match(/(010)/g) ? strB.match(/(010)/g).length : 0;
}

let result = beautifulBinaryString(01100);
result;

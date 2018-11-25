function solve(a0, a1, a2, b0, b1, b) {
  var countA = 0;
  var countB = 0;
  for (var i = 0, j = 3; i <= 2, j <= 5; i++, j++) {
    if (arguments[i] > arguments[j]) {
      countA += 1;
    } else if (arguments[i] < arguments[j]) {
      countB += 1;
    }
  }

  return [countA, countB];
}

var result = solve(5,6,7,3,6,10);
console.log(result.join(' '));

function howManyGames(p, d, m, s) {
  let start = p;
  let difference = d;
  let end = m;
  let total = s;
  let totalValue = p;
  let totalCount = 0;

  while (totalValue <= total) {
    if (start - difference > end) {
      totalValue += start - difference;
      start = start - difference;
      totalCount++;
    } else {
      start = end;
      totalValue += end;
      totalCount++;
    }
  }

  return totalCount;
}

let result = howManyGames(20, 3, 6, 85);
result;

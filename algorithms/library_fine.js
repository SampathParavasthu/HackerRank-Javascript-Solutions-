function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) {
    return (y2 - y1) * 10000;
  } else if (m1 > m2 && y1 == y2) {
    return (m2 - m1) * 500;
  } else if (d1 > d2 && y1 == y2 && m1 == m2) {
    return (d2 - d1) * 15;
  } else {
    return 0;
  }
}

let result = libraryFine(9,6,2015,6,6,2015);
result;

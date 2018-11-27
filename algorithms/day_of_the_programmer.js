let solve = year => {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31],
    programmerDay = 256;
  let julianCal = () => {
    if (year % 4 === 0) {
      daysInMonth[1] = 29;
      return `${programmerDay -
        daysInMonth.reduce((day, val, indx, arr) => day + val, 0)}.09.${year}`;
    } else {
      return `${programmerDay -
        daysInMonth.reduce((day, val, indx, arr) => day + val, 0)}.09.${year}`;
    }
  };

  let gregorainCal = () => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      daysInMonth[1] = 29;
      return `${programmerDay -
        daysInMonth.reduce((day, val, indx, arr) => day + val, 0)}.09.${year}`;
    } else {
      return `${programmerDay -
        daysInMonth.reduce((day, val, indx, arr) => day + val, 0)}.09.${year}`;
    }
  };

  if (year === 1918) {
    return `26.09.1918`;
  } else if (year < 1919) {
    return julianCal();
  } else {
    return gregorainCal();
  }
};

let result = solve(2017);
result;

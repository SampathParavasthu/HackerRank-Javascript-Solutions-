function timeInWords(h, m) {
  let hourInWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
  ];
  let minutes = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'half'
  ];

  if (m == 0) {
    return `${hourInWords[h - 1]} o' clock`;
  } else if (m <= 30) {
    return `${minutes[m - 1]} ${
      minutes[m - 1] == 'quarter' || minutes[m - 1] == 'half' ? '' : minutes[m - 1] == 'one' ?'minute ':'minutes '
    }past ${hourInWords[h - 1]}`;
  } else {
    m = 60 - m;
    return `${minutes[m - 1]} ${
      minutes[m - 1] == 'quarter' || minutes[m - 1] == 'half' ? '' : 'minutes '
    }to ${hourInWords[h] ? hourInWords[h] : 'one'}`;
  }
}

let result = timeInWords(1, 1);
result;

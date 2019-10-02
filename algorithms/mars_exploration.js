let marsExploration = s => {
  let lettersAltered = 0;
  const MESSAGE = 'SOS';
  let str = s;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== MESSAGE[i%3]) lettersAltered++;
  }
  return lettersAltered;
}

let result = marsExploration('SOSTOT');
result;
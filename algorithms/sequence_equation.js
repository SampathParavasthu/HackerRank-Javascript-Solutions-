function sequenceEquation(count, sequences) {
  let sequence = sequences.map(val => parseInt(val));
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if (i + 1 === parseInt(sequence[j])) {
          console.log(sequence.indexOf(j + 1) + 1)
        }
      }
    }
  }

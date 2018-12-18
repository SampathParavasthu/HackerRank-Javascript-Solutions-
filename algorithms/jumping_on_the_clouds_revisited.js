function jumpingOnClouds(count, jumpValue, sequence) {
  let totalEnergy = 100;
  for (let i = jumpValue; i < count; i += jumpValue) {
    sequence[i] === 1 ? totalEnergy = totalEnergy - 3 : totalEnergy--;
  }
  sequence[0] === 0 ? totalEnergy-- : totalEnergy = totalEnergy - 3;
  console.log(totalEnergy);
}

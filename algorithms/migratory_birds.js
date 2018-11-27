function migratoryBirds(n, types) {
  var birdTypes = [-1,0,0,0,0,0];
  types.forEach(bird =>{
    birdTypes[bird] += 1;
  });
  return birdTypes.indexOf(Math.max(...birdTypes));
}

var result = migratoryBirds(6,[1,4,4,4,5,3]);
result;

function cycle(countOfCycle){
  let initalTreeHeight = 1;
  if (countOfCycle === 0) {
  }else if (countOfCycle > 0) {
    for (var i = 1; i <= countOfCycle; i++) {
      i%2 !== 0 ?initalTreeHeight = initalTreeHeight * 2 : initalTreeHeight++;
    }
  }
    console.log(initalTreeHeight);
}


  function utopianTree(testCases){
  testCases.forEach(eachTestCase=>{
      cycle(eachTestCase);
  });
}

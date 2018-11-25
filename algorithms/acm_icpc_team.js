
function acmTeam(topic) {
  let maxTopics = 0;
  let maxTeamCount;
  for (let index = 0; index < topic.length; index++) {
    for (let indx = 0; indx < topic.length; indx++) {
      let count = 0;
      if (topic[indx + 1] && index != indx + 1 && index < indx + 1) {
        for (let ind = 0; ind < topic[index].length; ind++) {
          if (+topic[index][ind] + +topic[indx + 1][ind] != 0) {
            count++;
          }
        }
      }
      if (maxTopics < count) {
        maxTeamCount = 0;
        maxTopics = count;
      }
      if (maxTopics == count) maxTeamCount++;
    }
  }
  return [maxTopics, maxTeamCount];
}

let result = acmTeam([10101,11100,11010,00101]);
result ;

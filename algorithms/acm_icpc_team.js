'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the acmTeam function below.
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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

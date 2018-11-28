
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var s = [];
  for (s_i = 0; s_i < 3; s_i++) {
    s[s_i] = readLine().split(' ');
    s[s_i] = s[s_i].map(Number);
  }
  //  Print the minimum cost of converting 's' into a magic square

  function magicSquare(val) {
    let possibilities = [];
    let availableSequences = [
      [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
      [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
      [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
      [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
      [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
      [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
      [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
      [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    for (var i = 0; i < availableSequences.length; i++) {
      let count = 0;
      for (var j = 0; j < availableSequences[0].length; j++) {
        for (var k = 0; k < availableSequences[0].length; k++) {
          if (availableSequences[i][j][k] !== val[j][k]) {
            count += Math.abs(availableSequences[i][j][k] - val[j][k]);
          }
        }
      }
      possibilities.push(count);
    }
    return Math.min(...possibilities);
  }

  let result = magicSquare(s);
  console.log(result);
}

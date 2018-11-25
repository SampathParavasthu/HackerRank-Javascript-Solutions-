process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function designerPdfViewer(alphabetsHeight,word){

  let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let listOfAvailableHeights =[];
  for (let letter of word) {
    listOfAvailableHeights.push(alphabetsHeight[alphabets.indexOf(letter)]) ;
  }
  console.log(Math.max(...listOfAvailableHeights)*1*word.length);

}



function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    designerPdfViewer(h,word);
}

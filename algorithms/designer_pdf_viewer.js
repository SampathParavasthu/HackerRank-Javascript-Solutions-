function designerPdfViewer(alphabetsHeight,word){

  let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let listOfAvailableHeights =[];
  for (let letter of word) {
    listOfAvailableHeights.push(alphabetsHeight[alphabets.indexOf(letter)]) ;
  }
  console.log(Math.max(...listOfAvailableHeights)*1*word.length);

}

let result = designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],'zaba');
result;

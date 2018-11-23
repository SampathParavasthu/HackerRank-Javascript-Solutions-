let newString ="";
function caesarCipher(str, rotation) {
    let strLength = str.length;

    for (let index = 0; index < strLength; index++) {
        newStr(str.charCodeAt(index),rotation); 
    }
    return newString;
}


function newStr(charCode, rotation) {
    if (charCode >= 65 && charCode <= 90) {
        let charCount = ((charCode+rotation-65)%26)+65
        newString += String.fromCharCode(charCount); 
    } else if (charCode >= 97 && charCode <= 122 ) {
        let charCount = ((charCode+rotation-97)%26)+97
        newString += String.fromCharCode(charCount); 
    } else {
        newString += String.fromCharCode(charCode); 
    }
    
}

let result = caesarCipher('middle-Outz',2);
result;

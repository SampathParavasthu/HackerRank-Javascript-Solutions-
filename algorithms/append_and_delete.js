function appendAndDelete(originalString,expectedString,numberOfOperations){
    let matchedString = '';
    for (let index = 0; index < originalString.length; index++) {
        if (originalString[index]===expectedString[index]) {
            matchedString += originalString[index];
        } else {
            break;
        }
    }
    let extraStrLength = originalString.substring(matchedString.length).length;
    let neededStrLength = expectedString.substring(matchedString.length).length;
    let lengthRequired = numberOfOperations - extraStrLength - neededStrLength;
    if (neededStrLength>extraStrLength && lengthRequired % 2 != 0) {
        return 'No';
    } else if(lengthRequired >= 0) {
        return 'Yes';
    } else {
        return 'No';
    }
}

let result  = appendAndDelete('hackerhappy','hackerrank',9);
result;

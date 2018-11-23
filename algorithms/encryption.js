function encryption(s) {
    let row = Math.floor(Math.pow(s.length, 1 / 2));
    let column = Math.ceil(Math.pow(s.length, 1 / 2));
    let startIndex = 0;
    let newStr = [];
    
    if (row * column < s.length) {
        row++;
    }
    
    while (startIndex < column) {
        let str='';
        for (let index = startIndex; index < s.length; index += column) {
            if (s[index]) {
                str += s[index];
            }
        }
        newStr.push(str);
        startIndex += 1;
    }
    return newStr.join(' ');
}


let result = encryption('chillout');
result;

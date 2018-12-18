function repeatedString(s, n) {
    let strLength = s.length;
    if (s.includes('a')) {
        let aInStr = s.match(/[a]/g).length;
        let aCount = aInStr * Math.floor(n / strLength);
        for (let index = 0; index < n%strLength; index++) {
            if (s[index] == 'a') aCount++;
        }
        return aCount 
    } else {
        return 0;
    }
}

let result = repeatedString('aba',10);
result;

let actualArr = [];
function cutTheSticks(arr) {
    if (arr.length != 0) {
        actualArr.push(arr.length)
        let filteredArr = arr.filter(val => val != 0);
        let minValue = Math.min(...filteredArr);
        let newArr = filteredArr.map(val => val - minValue);
        cutTheSticks(newArr)
    }
}

let result = cutTheSticks([5,4,4,2,2,8]);
result;

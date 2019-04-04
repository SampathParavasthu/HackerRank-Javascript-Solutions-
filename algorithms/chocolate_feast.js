function chocolateFeast(n, c, m) {

    let chocolateCount = Math.floor(n / c);
    let chocolatEaten = chocolateCount;

    while ((chocolateCount / m) >= 1) {
        let wrapper = Math.floor(chocolateCount / m);
        chocolatEaten += wrapper;
        chocolateCount = wrapper + (chocolateCount % m);
    }
    return chocolatEaten;
}


let resultOne = chocolateFeast(10,2,5);
let resultTwo = chocolateFeast(12,4,4);
let resultThree = chocolateFeast(6,2,2);

resultOne;//6 
resultTwo; //3
resultThree;//5

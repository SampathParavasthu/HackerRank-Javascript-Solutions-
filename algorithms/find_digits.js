function main() {
    let t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let digits = n.toString().split('');
        let totalEvenlyDivisible = 0;
        digits.map(Number).forEach(function (element) {
          n % element === 0 ? totalEvenlyDivisible++ : '';
        });
        console.log(totalEvenlyDivisible);
      }  
  }

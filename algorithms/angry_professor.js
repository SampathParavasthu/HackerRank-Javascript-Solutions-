function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
          let totalCountOfStudents = 0;
          a.forEach(time=>{
            time<=0 && totalCountOfStudents++;
          });

           totalCountOfStudents >=  k?console.log('NO'):console.log('YES');

    }
    
}

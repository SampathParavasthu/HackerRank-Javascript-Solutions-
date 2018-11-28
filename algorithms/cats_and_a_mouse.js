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

function main() {
    let val = ["Cat A","Cat B","Mouse C"];
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
 
    let val_1 = Math.abs(x-z);
    let val_2 = Math.abs(y-z);
        if(val_1<val_2){
           console.log("Cat A")
           }else if(val_1>val_2){
                    console.log("Cat B")
                    }else{
                        console.log("Mouse C")
                    }
        
    }

}

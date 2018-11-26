function stairCase(n){   
    for(let i=1;i<=n;i++){
        console.log(' '.repeat(n-i) + '#'.repeat(i));
    }
}

var result = stairCase(6);

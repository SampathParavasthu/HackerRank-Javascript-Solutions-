function camelCase (str){
    let count= 0;
    for (const val of str) {
        if(val === val.toUpperCase())
        count++
    }
    return count + 1;
};

let result = camelCase('saveChangesInTheEditor');
result;

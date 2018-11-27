function kangaroo(x1, v1, x2, v2) {
   
 if(v1 > v2 && !((x2-x1)%(v1-v2))){
    console.log("YES");
 }
else{
    console.log("NO");
}

kangaroo(0,3,4,2);

let drawingBook = (n,p) =>{
  let totalPage =[];
  let seperatePage =[];
  for(let i = 0;i<=n;i++){

  if(seperatePage.length === 2){
      totalPage.push(seperatePage);
      seperatePage =[];
      seperatePage.push(i);
  }else{
      seperatePage.push(i);
  }
  }
  totalPage.push(seperatePage);

  function findMinPage(){
      let data;
      totalPage.forEach((val,indx)=>{
          if(val.includes(p)){
              data =  indx;
          }
      });
      return data;
  }

let minPage = findMinPage();

function findMaxPage(){
    let data;
    totalPage
    .reverse()
    .forEach((val,indx)=>{
        if(val.includes(p)){
            data =  indx;
        }
    });
    return data;
}

let maxPage= findMaxPage();
  return Math.min(minPage,maxPage);
};

let result = drawingBook(6, 2);
result;

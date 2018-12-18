function saveThePrisoner(prisoner,sweets,firstCount){
  let saved = (firstCount + sweets - 1) % prisoner;
    if(saved ===0)
      saved = prisoner;
      
  console.log(saved);      
}

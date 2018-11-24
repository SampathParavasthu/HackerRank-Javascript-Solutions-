function passwordStrength(length, password){
  let lengthOfPassword = password.length;
  let smallLetters = password.search(/[a-z]/);
  let bigLetters = password.search(/[A-Z]/);
  let specialCharacters = password.search(/\W/);
  let digits = password.search(/\d/);

    let arr = [smallLetters, bigLetters, specialCharacters, digits];
  if (
    smallLetters < 0 ||
    bigLetters < 0 ||
    specialCharacters < 0 ||
    digits < 0
  ) {
      let totalLength = arr.filter(val => val == -1).length;
     return  totalLength + length <6 ? totalLength + (6 - (totalLength + length)) : totalLength  ;
  }

  return length<6?6-length:0;
};

let result = passwordStrength(3,'AB1');
result;

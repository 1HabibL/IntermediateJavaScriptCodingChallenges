//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.
//fearNotLetter("abce") should return the string d.


function fearNotLetter(str) {
    let splittedStr = str.split("");
    console.log(splittedStr);
  
    let charStr = splittedStr.map((variable) => variable.charCodeAt());
    console.log(charStr);
  
    for (let i = 0; i < charStr.length; i++) {
      let MissingNoAlgorithm = charStr[i + 1] - charStr[i];
      if (MissingNoAlgorithm !== 1) {
        let missingStr = (charStr[i + 1] + charStr[i]) / 2;
        let missingChar = String.fromCharCode(missingStr);
        console.log(missingChar);
        return missingChar;
      }
    }
    
    console.log("No skipped variables");
    return undefined;
  }
  
  fearNotLetter("abcde");
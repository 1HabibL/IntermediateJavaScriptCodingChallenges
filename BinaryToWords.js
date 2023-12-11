
function binaryAgent(str){
let splittedStr = str.split(" ")
console.log(splittedStr)
let intialArray = []


  for (let i = 0; i < splittedStr.length; i++)
  {

parseInt(splittedStr[i], 2)
let letterVariable = String.fromCharCode(parseInt(splittedStr[i], 2));

intialArray.push(letterVariable)

    
  }
  let finalarray = intialArray.join("")
  console.log(finalarray);
  return finalarray;

}
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

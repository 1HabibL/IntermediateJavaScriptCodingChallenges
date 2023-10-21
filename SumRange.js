//We'll pass you an array of two numbers. 
//Return the sum of those two numbers plus the sum of all the numbers between them. 
//The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let initialVariable = arr[0];
    let endVariable = arr[1];
  
    if (initialVariable > endVariable) {
      [initialVariable, endVariable] = [endVariable, initialVariable];
    }
  
    let newArray = [];
    for (let i = initialVariable; i <= endVariable; i++) {
      newArray.push(i);
    }
  
    let sum = newArray.reduce((acc, current) => acc + current, 0);
  
    console.log(sum);
  }
  
  sumAll([1, 4]);
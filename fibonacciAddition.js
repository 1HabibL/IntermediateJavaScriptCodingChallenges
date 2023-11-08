//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
//The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
    let sumArrayPrev = [0];
    let sumArrayNext = [1];
    let fibonacciNumbers = [0, 1];
   
    let fibSum = 1;
      while(fibSum <= num) {
      fibSum = sumArrayPrev[0] + sumArrayNext[0];
      fibonacciNumbers.push(fibSum);
      sumArrayPrev[0] = sumArrayNext[0];
      sumArrayNext[0] = fibSum;
      } 
      fibonacciNumbers.pop(); 
      console.log(fibonacciNumbers)
let filteredArray = fibonacciNumbers.filter((value) => value % 2 !== 0)
console.log(filteredArray)
let sumOfArray = filteredArray.reduce((value1, value2) => value1 + value2, 0)
console.log(sumOfArray);
      return sumOfArray;
    }
    
    sumFibs(4);
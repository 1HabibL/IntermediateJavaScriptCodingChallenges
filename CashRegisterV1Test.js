//value of currency
const currencyValue = [
    ['penny', 0.01],
    ['loonie', 1.00],
    ['toonies', 2.00]
  ]
  
  const pennyValueC = currencyValue[0][1]
  const looniesValueC = currencyValue[1][1]
  const tooniesValueC = currencyValue[2][1]
  
  //how many money is in cash register penny 1.07 means theres 1.07 dollars worth of pennies meaning there are 107 pennies,
  const cashRegister = [['penny', 1.07], ['loonie', 30], ['toonies', 22]]
  
  //Physical Currency Amount (physical amount of coins)
  let penniesAmount = (cashRegister[0][1]*100)
  console.log("we have " + penniesAmount  + " pennies")
  let loonieAmount = (cashRegister[1][1]*1)
  console.log("we have " + loonieAmount + " loonies")
  let tooniesAmount = (cashRegister[2][1]/2)
  console.log("we have " + tooniesAmount + " toonies")
  
  //Numerical Value Amount Existent in Cash Register (dollar amount of coins)
  let penniesValue = cashRegister[0][1]
  let loonieValue = cashRegister[1][1]
  let toonieValue = cashRegister[2][1]
  
  //algorithm for summing all money in cash register .toFixed is needed to round value to 2 decimal places as javascript is not good with floating points
  var totalAmount = 0
  for (let i = 0; i < cashRegister.length; i++){
  totalAmount = totalAmount + cashRegister[i][1]
  }
  console.log("Cash register has a total of $" + totalAmount.toFixed(2)) 
  
  //dummy customer item price and cash
  var itemPrice = 12.07
  const cashGiven = 20.00
  
  //calculating change, empty array allowing for inserting change,
  let changeCashValue = cashGiven - itemPrice
  var actualChangeCoins = []
  var actualChangeValue = 0
  console.log(changeCashValue)
  //change should be 3 toonies 1 loonie 93 cents
  //variables to hold the amount of toonies loonies and pennies the customer shall receive
  var toonieChangeAmount = 0
  var loonieChangeAmount = 0
  var pennyChangeAmount = 0
  
  //algorithms to calcualte how much coins will be withdrawn, how much coins are left in the cash register, and how much coins are given to customer
  while(changeCashValue > tooniesValueC){
    tooniesAmount = tooniesAmount - 1
    
    toonieValue = toonieValue - 2
    
    toonieChangeAmount = toonieChangeAmount + 1
    
    changeCashValue = changeCashValue - 2
    
  }
  console.log(tooniesAmount + " toonies are left in the cash register")
  console.log(toonieValue + " dollars worth of toonies are left in the cash register")
  console.log(toonieChangeAmount + "  toonies were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['toonies', toonieChangeAmount])
  
  while(changeCashValue > looniesValueC){
    loonieAmount = loonieAmount - 1
    
    loonieValue = loonieValue - 1
    
    loonieChangeAmount = loonieChangeAmount + 1
    
    changeCashValue = changeCashValue - 1
    
  }
  console.log(loonieAmount + " are the number of loonies left in the cash register")
  console.log(loonieValue + " dollars worth of loonies are left in the cash register")
  console.log(loonieChangeAmount + " loonies were given to the customer as change ")
  console.log(changeCashValue.toFixed(2) + " is the remainding change left for the customer")
  
  actualChangeCoins.push(['loonies', loonieChangeAmount])
  
  while(changeCashValue.toFixed(2) >= pennyValueC){
    penniesAmount = penniesAmount - 1
    
    penniesValue = penniesValue - 0.01
    
    pennyChangeAmount = pennyChangeAmount + 1
    
    changeCashValue = changeCashValue - 0.01
    
  }
  console.log(penniesAmount + " number of pennies are left in the cash register")
  console.log(penniesValue.toFixed(2) + " dollars worth of pennies are left in the cash register")
  console.log(pennyChangeAmount + " pennies were given to the customer as change")
  console.log(changeCashValue.toFixed(2) + " dollars remaining are whats left in change")
  actualChangeCoins.push(['pennies', pennyChangeAmount])
  
  //shows the change the customer will receive in a neat array
  console.log(actualChangeCoins)  
function checkCashRegister(price, cash, cid) {
  const currencyValue = [
    ['PENNY', 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25], 
    ['ONE', 1.00],
    ['FIVE', 5.00],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  
  const pennyValueC = currencyValue[0][1]
  const nickelValueC = currencyValue[1][1]
  const dimeValueC = currencyValue[2][1]
  const quarterValueC = currencyValue[3][1]
  const oneValueC = currencyValue[4][1]
  const fiveValueC = currencyValue[5][1]
  const tenValueC = currencyValue[6][1]
  const twentyValueC = currencyValue[7][1]
  const onehundredValueC = currencyValue[8][1]

   //Physical Currency Amount (physical amount of coins)
   let PENNYAmount = (cid[0][1]*100)
   console.log("we have " + PENNYAmount  + " pennies")
   let NICKELAmount = (cid[1][1]*20)
   console.log("we have " + NICKELAmount + " nickels")
   let DIMEAmount = (cid[2][1]*10)
   console.log("we have " + DIMEAmount + " dimes")
   let QUARTERAmount = (cid[3][1]*4)
   console.log("we have " + QUARTERAmount + " quarters")
   let ONEAmount = (cid[4][1]/1)
   console.log("we have " + ONEAmount + " $1 bills")
   let FIVEAmount = (cid[5][1]/5)
   console.log("we have " + FIVEAmount + " $5 bills")
   let TENAmount = (cid[6][1]/10)
   console.log("we have " + TENAmount + " $10 bills")
   let TWENTYAmount = (cid[7][1]/20)
   console.log("we have " + TWENTYAmount + " $20 bills")
   let HUNDREDAmount = (cid[8][1]/100)
   console.log("we have " + HUNDREDAmount + " $100 bills")

   //Numerical Value Amount Existent in Cash Register (dollar amount of coins)
  let penniesValue =  cid[0][1]
  let NICKELValue =  cid[1][1]
  let DIMEValue =  cid[2][1]
  let QUARTERValue =  cid[3][1]
  let ONEValue =  cid[4][1]
  let FIVEValue =  cid[5][1]
  let TENValue =  cid[6][1]
  let TWENTYValue =  cid[7][1]
  let HUNDREDValue =  cid[8][1]


 var totalAmount = 0
  for (let i = 0; i < cid.length; i++){
  totalAmount = totalAmount + cid[i][1]
  }
  console.log("Cash register has a total of $" + totalAmount.toFixed(2)) 
  //calculating change, empty array allowing for inserting change,
  let changeCashValue = cash - price
  var actualChangeCoins = []
  var actualChangeValue = 0
  console.log(changeCashValue + "$ is the customers change")
  
   if (totalAmount === changeCashValue){
       console.log({status: "CLOSED", change: cid})
    return {status: "CLOSED", change: cid}
  }

  if (changeCashValue > totalAmount){
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

//variables to hold the amount of toonies loonies and pennies the customer shall receive
  var PENNYChangeAmount = 0
  var NICKELChangeAmount = 0
  var DIMEChangeAmount = 0
  var QUARTERChangeAmount = 0
  var ONEChangeAmount = 0
  var FIVEChangeAmount = 0
  var TENChangeAmount = 0
  var TWENTYChangeAmount = 0
  var HUNDREDChangeAmount = 0

  while(changeCashValue >= onehundredValueC && HUNDREDAmount != 0 ){
    HUNDREDAmount = HUNDREDAmount - 1
    HUNDREDValue = HUNDREDValue - onehundredValueC
    HUNDREDChangeAmount  = HUNDREDChangeAmount + onehundredValueC
    changeCashValue = changeCashValue - onehundredValueC
  }
  if (HUNDREDChangeAmount > 0){
  console.log(HUNDREDAmount + " $100 bills are left in the cash register")
  console.log(HUNDREDValue + " dollars worth of $100 bills are left in the cash register")
  console.log(HUNDREDChangeAmount + "  $100 bills were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['ONE HUNDRED', HUNDREDChangeAmount])
}
  while(changeCashValue >= twentyValueC && TWENTYAmount != 0){
    TWENTYAmount = TWENTYAmount - 1
    TWENTYValue = TWENTYValue - twentyValueC
    TWENTYChangeAmount  = TWENTYChangeAmount + twentyValueC
    changeCashValue = changeCashValue - twentyValueC
  }
  if (TWENTYChangeAmount > 0){
  console.log(TWENTYAmount + " $20 bills are left in the cash register")
  console.log(TWENTYValue + " dollars worth of $20 bills are left in the cash register")
  console.log(TWENTYChangeAmount + "  $20 bills were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['TWENTY', TWENTYChangeAmount])
}
  while(changeCashValue >= tenValueC && TENAmount != 0){
    TENAmount = TENAmount - 1
    TENValue = TENValue - tenValueC
    TENChangeAmount  = TENChangeAmount + tenValueC
    changeCashValue = changeCashValue - tenValueC
  }
  if (TENChangeAmount > 0){
  console.log(TENAmount + " $10 bills are left in the cash register")
  console.log(TENValue + " dollars worth of $10 bills are left in the cash register")
  console.log(TENChangeAmount + "  $10 bills were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['TEN', TENChangeAmount])
  }
while(changeCashValue >= fiveValueC && FIVEAmount != 0){
    FIVEAmount = FIVEAmount - 1
    FIVEValue = FIVEValue - fiveValueC
    FIVEChangeAmount  = FIVEChangeAmount + fiveValueC
    changeCashValue = changeCashValue - fiveValueC
  }
  if (FIVEChangeAmount > 0){
  console.log(FIVEAmount + " $5 bills are left in the cash register")
  console.log(FIVEValue + " dollars worth of $5 bills are left in the cash register")
  console.log(FIVEChangeAmount + "  $5 bills were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  
  actualChangeCoins.push(['FIVE', FIVEChangeAmount])
  }
  while(changeCashValue >= oneValueC && ONEAmount != 0){
    ONEAmount = ONEAmount - 1
    ONEValue = ONEValue - oneValueC
    ONEChangeAmount  = ONEChangeAmount + oneValueC
    changeCashValue = changeCashValue - oneValueC
  }
   if (ONEChangeAmount > 0){
  console.log(ONEAmount + " $1 bills are left in the cash register")
  console.log(ONEValue + " dollars worth of $1 bills are left in the cash register")
  console.log(ONEChangeAmount + "  $1 bills were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['ONE', ONEChangeAmount])
}
  while(changeCashValue >= quarterValueC && QUARTERAmount != 0){
    QUARTERAmount = QUARTERAmount - 1
    QUARTERValue = QUARTERValue - quarterValueC
    QUARTERChangeAmount  = QUARTERChangeAmount + quarterValueC
    changeCashValue = changeCashValue - quarterValueC
  }
  if (QUARTERChangeAmount > 0){
  console.log(QUARTERAmount + " quarters are left in the cash register")
  console.log(QUARTERValue + " dollars worth of quarters are left in the cash register")
  console.log(QUARTERChangeAmount + "  quarters were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['QUARTER', QUARTERChangeAmount])
}
  while(changeCashValue >= dimeValueC && DIMEAmount != 0){
    DIMEAmount = DIMEAmount - 1
    DIMEValue = DIMEValue - dimeValueC
    DIMEChangeAmount  = DIMEChangeAmount + dimeValueC
    changeCashValue = changeCashValue - dimeValueC
  }
  if (DIMEChangeAmount > 0){
  console.log(DIMEAmount + " dimes are left in the cash register")
  console.log(DIMEValue + " dollars worth of dimes are left in the cash register")
  console.log(DIMEChangeAmount + "  dimes were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['DIME', DIMEChangeAmount])
}
  while(changeCashValue >= nickelValueC && NICKELAmount != 0){
    NICKELAmount = NICKELAmount - 1
    NICKELValue = NICKELValue - nickelValueC
    NICKELChangeAmount  = NICKELChangeAmount + nickelValueC
    changeCashValue = changeCashValue - nickelValueC
  }
  if (NICKELChangeAmount > 0){
  console.log(NICKELAmount + " nickels are left in the cash register")
  console.log(NICKELValue + " dollars worth of nickels are left in the cash register")
  console.log(NICKELChangeAmount + "  nickels were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['NICKEL', NICKELChangeAmount])
}
  while(changeCashValue.toFixed(2) >= pennyValueC && PENNYAmount != 0){
    PENNYAmount = PENNYAmount - 1
    penniesValue = penniesValue - pennyValueC
    PENNYChangeAmount  = PENNYChangeAmount + pennyValueC
    changeCashValue = changeCashValue - pennyValueC
  }
  if (PENNYChangeAmount > 0){
  console.log(PENNYAmount + " pennies are left in the cash register")
  console.log(penniesValue + " dollars worth of pennies are left in the cash register")
  console.log(PENNYChangeAmount + "  pennies/y were given to the customer in change")
  console.log(changeCashValue.toFixed(2) + " is left for change")
  actualChangeCoins.push(['PENNY', PENNYChangeAmount])
}
  console.log(actualChangeCoins)
  
 if (changeCashValue > 0){
     return {status: "INSUFFICIENT_FUNDS", change: []}
 }

console.log({status: "OPEN", change: actualChangeCoins})
return {status: "OPEN", change: actualChangeCoins}
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

let array1 = [1, 2, 3, 4, 5];
let PersonObj = [{
  Name: "John Doe",
  Age: 30,
  Country: "USA"
},
{
  Name: "sal smith",
  Age: 20,
  Country: "Germany"
},
{
  Name: "Xi ping",
  Age: 50,
  Country: "China"
}
,
{
  Name: "",
  Age: 50,
  Country: "China"
}
]

function truthChecker(collection, pre){
let propertyName = pre;
for (let i = 0; i < collection.length; i++){
  console.log(collection[i][propertyName])
  if (collection[i][propertyName]){
    console.log("true")
  } else {console.log("false")
  return false
}
}
return true
}

truthChecker(PersonObj, "Name");


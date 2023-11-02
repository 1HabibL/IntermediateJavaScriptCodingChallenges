//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it. 
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    let capitalizationCheck = /^[A-Z]/
    let lowercaseCheck = /^[a-z]/
    
    if (before[0].match(capitalizationCheck)){
        let newAfter = after[0].toUpperCase() + after.slice(1)
        let newStr = str.replace(before, newAfter)
    console.log(newStr)
        return newStr;   
    }
    
    
    if (before[0].match(lowercaseCheck)){
        let newAfter = after[0].toLowerCase() + after.slice(1)
        let newStr = str.replace(before, newAfter)
    console.log(newStr)
        return newStr;   
    }
    
    let newStr = str.replace(before, after)
    console.log(newStr)
        return newStr;
      }
      
      myReplace("I think we should look up there", "up", "Down");
    
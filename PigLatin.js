//Pig Latin is a way of altering English Words. The rules are as follows:
//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.

function translatePigLatin(string1){

    let vowels = /[aeiou]/;
    
    if(string1[0].match(vowels)){
        let finalPL = string1 + "way";
        console.log(finalPL);
        return(finalPL);
    } else if(!string1.match(vowels)) {
        let finalPL = string1 + "ay";
        console.log(finalPL);
        return(finalPL);
    }
    
    else {
    
    let i = 0;
    //let constString = string1.substring(0, i);
    for (i; !string1[i].match(vowels); i++){
        console.log(string1[i], "is not a vowel", i)
    } 
    
    let arrayString = string1.split("")
    let initialString = arrayString.splice(0, i);
    console.log(initialString);
    console.log(arrayString);
    //console.log(constString);
    
    let movedConsts = initialString.join("")
    let newIntro = arrayString.join("")
    
    let finalPL = newIntro + movedConsts +"ay";
    console.log(finalPL)
    
    return finalPL
    }
    }
    
    translatePigLatin("school");

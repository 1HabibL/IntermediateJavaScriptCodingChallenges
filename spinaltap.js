function spinalCase(str) {
  // Use a regular expression to insert spaces before uppercase letters.
  // This regular expression matches any uppercase letter that is not preceded by a space.
  const newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Split the modified string by spaces and underscores.
  const splittedStr = newStr.split(/[\s_]+);
  
  // Convert the words to lowercase and join them with dashes.
  const spinalCaseStr = splittedStr.map(word => word.toLowerCase()).join('-');

  console.log(spinalCaseStr);
  return spinalCaseStr;
}

spinalCase("TheAndyGriffithShow");
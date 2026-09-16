function duplicateCount(text){
  
  // lowercase the text  
  const cleanedText = text.toLowerCase();
  
  // initialize empty array to contain unique characters in the text  
  const uniqueCharacters = [];
  
  // variable to hold amount of duplicate characters in the text  
  let duplicateCount = 0;
  
  // get unique characters in the text and add to empty array
  for (const char of cleanedText) {
    if (!uniqueCharacters.includes(char)) {
      uniqueCharacters.push(char)
    }
  }

  // iterate through the unique characters
  for (const uniqueChar of uniqueCharacters) {
    // variable to check how many times the character appeared in the text
    let count = 0;
    
    // iterate through the text to count how many times the unique character appeared
    for (const char of cleanedText) {
      if (uniqueChar == char) {
        count ++;
      }
    }
    
    // if the unique character appeared more than once, update the value of duplicateCount    
    if (count > 1) {
      duplicateCount ++;
    }
  }
  
  console.log(duplicateCount);
  return duplicateCount;
  
}
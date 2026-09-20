function spinWords(string){

  const words = string.split(" ");
  const spinnedWords = [];

  for (const word of words) {
    if (word.length > 4) {
      let letters = word.split("");
      if (word.length % 2 == 0) {
        for (let i = 0, j = letters.length - 1; i <= letters.length / 2 - 1; i++, j--) {
          let temp = letters[j];
          letters[j] = letters[i];
          letters[i] = temp;
        }
      } else {
        for (let i = 0, j = letters.length - 1; i <= letters.length / 2; i++, j--) {
          let temp = letters[j];
          letters[j] = letters[i];
          letters[i] = temp;
        }
      }
      let flipped = letters.join("");
      spinnedWords.push(flipped);
    } else {
      spinnedWords.push(word);
    }
    
  };
  
  return spinnedWords.join(' ');
}


// Another solution using js built-in reverse
function spinWords(string) {
  return string
    .split(" ")
    .map(word => word.length > 4 ? [...word].reverse().join("") : word)
    .join(" ");
}
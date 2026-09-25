function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
        /[^A-Za-z0-9]/.test(word)
        ? word
        : word.slice(1) + word[0] + "ay")
    .join(" ");
}


// Better version:
function pigIt(str) {
  return str
    .split(" ")
    .map(word => {
      if (/^[^a-zA-Z]+$/.test(word)) return word;
      return word.slice(1) + word[0] + "ay";
    })
    .join(" ");
}
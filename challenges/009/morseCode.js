const MORSE_CODE = {
  // Letters
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",

  // Numbers
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",

  // Punctuation / symbols
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": "\"",
  "...-..-": "$",
  ".--.-.": "@",
  
  // Special
  "...---...": "SOS"  
};


function decodeMorse(morseCode) {

    const code = morseCode.split("   ");
    const words = code.map(x => x.split(" "));

    return words
        .map(word => word.map(x => MORSE_CODE[x]).join(""))
        .join(" ")
        .trim();

}


// Simpler version:
function decodeMorse(morseCode) {
  return morseCode
    .trim()
    .split(/\s{3}/)
    .map(word =>
      word
        .split(" ")
        .map(code => MORSE_CODE[code])
        .join("")
    )
    .join(" ");
}

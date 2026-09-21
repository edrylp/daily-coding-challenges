function toCamelCase(str){
    const words = str.split(/[-_]/);
    const convertedWords = [];

    convertedWords.push(words[0])

    for (const word of words.slice(1)) {
        let convertedWord = word.charAt(0).toUpperCase() + word.slice(1);
        convertedWords.push(convertedWord)
    }

    return convertedWords.join('')
}


// Simpler version using slice and map
function toCamelCase(str) {
    return str
        .split(/[-_]/)
        .map((word, i) => i ? word[0].toUpperCase() + word.slice(1) : word)
        .join('');
}

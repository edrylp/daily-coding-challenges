function firstNonRepeatingLetter(s) {
  const chars = s.split("");
  const uniqueChars = [...new Set(chars)];
  return (
    uniqueChars
      .filter(
        (char) =>
          chars.filter((c) => c.toLowerCase() === char.toLowerCase()).length ===
          1,
      )
      .at(0) ?? ""
  );
}


// Another version using Map for future reference:
function firstNonRepeatingLetter(s) {
  // Store each character's occurrence count, ignoring case
  const counts = new Map();

  // Count how many times each character appears
  for (const char of s.toLowerCase()) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  // Find the first character that appears only once
  // Use the original string to preserve the character's casing
  return [...s].find((char) => counts.get(char.toLowerCase()) === 1) ?? "";
}

function validBraces(braces) {
  const pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  const openingBraces = [];

  for (const brace of braces) {
    if ("({[".includes(brace)) {
      openingBraces.push(brace);
    } else {
      if (pairs[brace] === openingBraces.at(-1)) {
        openingBraces.pop();
      } else {
        return false;
      }
    }
  }

  return openingBraces.length === 0;
}
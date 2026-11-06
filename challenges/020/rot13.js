function rot13(str) {
  const asciiArray = str.split("");
  const result = asciiArray.map((char) =>
    char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91
      ? char.charCodeAt(0) + 13 > 90
        ? char.charCodeAt(0) + 13 - 26
        : char.charCodeAt(0) + 13
      : char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123
        ? char.charCodeAt(0) + 13 > 122
          ? char.charCodeAt(0) + 13 - 26
          : char.charCodeAt(0) + 13
        : char.charCodeAt(0),
  );

  return String.fromCharCode(...result);
}
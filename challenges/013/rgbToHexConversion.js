const hex = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function rgb(r, g, b) {
  return [r, g, b]
    .map((x) =>
      x < 0
        ? "00"
        : hex[Math.floor((x > 255 ? 255 : x) / 16)] +
          hex[Math.floor((x > 255 ? 255 : x) % 16)],
    )
    .join("");
}

// simpler version:
function rgb(r, g, b) {
  return [r, g, b]
    .map((x) => Math.max(0, Math.min(255, x)))
    .map((x) => x.toString(16).padStart(2, 0).toUpperCase())
    .join("");
}

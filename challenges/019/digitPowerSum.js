function sumDigPow(a, b) {
  const digits = [];
  for (let i = a; i <= b; i++) {
    if (i < 10) {
      digits.push(i);
    } else {
      let currentArr = String(i).split("");
      const sum = currentArr.reduce((acc, current, index) => {
        return acc + current ** (index + 1);
      }, 0);
      if (sum === i) {
        digits.push(i);
      }
    }
  }

  console.log(digits);
}

// Simpler version:
function sumDigPow(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    const sum = String(i)
      .split("")
      .reduce((acc, digit, index) => acc + digit ** (index + 1), 0);

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}

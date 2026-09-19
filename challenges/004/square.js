var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  if (n ** 0.5 % 1 == 0) {
    return true;
  } else return false;
};

// Using built in JavaScript math function:
const isSquare = (n) => n >= 0 && Math.sqrt(n) % 1 === 0;

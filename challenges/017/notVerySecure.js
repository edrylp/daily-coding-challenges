function alphanumeric(string) {
  return /^[A-Za-z0-9]+$/.test(string)
}


// More readable version. `i` makes the regex case-insensitive.
function alphanumeric(string) {
  return /^[a-z0-9]+$/i.test(string);
}
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map((x) => String(Math.floor(x)).padStart(2, "0"))
    .join(":");
}


// More explicit:
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [hours, minutes, secs]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
}
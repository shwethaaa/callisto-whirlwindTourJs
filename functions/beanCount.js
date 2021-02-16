function countBs(str) {
  return getCount(str);
}

function countChar(str, char) {
  return getCount(str, char);
}

function getCount(str, char = "B") {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

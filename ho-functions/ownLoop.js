// Your code here.
function loop(n, test, update, body) {
  for (let i = n; i > 0; i--) {
    if (test(n)) {
      body(n);
      n = update(n);
    }
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

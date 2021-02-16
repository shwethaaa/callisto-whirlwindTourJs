let cbSize = 8;
for (let i = 1; i <= cbSize; i++) {
  let grid = "";
  let grid1 = " #";
  let grid2 = "# ";
  for (let j = 1; j <= cbSize / 2; j++) {
    if (i % 2 === 0) {
      grid += grid1;
    } else if (i % 2 !== 0) {
      grid += grid2;
    }
  }
  console.log(grid);
}

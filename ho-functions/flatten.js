function flatten(flatten, val = []) {
  return flatten.concat(val);
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays.reduce(flatten)));

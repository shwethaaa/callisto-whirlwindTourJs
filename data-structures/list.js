function arrayToList(arr) {
  let link = prepend(arr[arr.length - 1], null);
  for (let i = arr.length - 2; i >= 0; i--) {
    link = prepend(arr[i], link);
  }
  return link;
}

function listToArray(link) {
  let arr = [];
  for (node = link; node; node = node.rest) {
    arr.push(node["value"]);
  }
  return arr;
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

function prepend(val, rest) {
  return { value: val, rest: rest };
}

console.log(arrayToList([10, 20, 80]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

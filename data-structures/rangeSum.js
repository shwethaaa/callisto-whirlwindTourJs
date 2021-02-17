function range(start, end, step = 1) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

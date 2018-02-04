const testList = [1, 2, 3, 4];

// function 1

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor(testList));

// function 2

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testList));

// function 3

function sumRecursive(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursive(list.slice(1));
}

console.log(sumRecursive(testList));

// function 4

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testList));

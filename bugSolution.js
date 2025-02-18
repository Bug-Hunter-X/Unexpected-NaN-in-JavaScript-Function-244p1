function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return 0; // Handle undefined case
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
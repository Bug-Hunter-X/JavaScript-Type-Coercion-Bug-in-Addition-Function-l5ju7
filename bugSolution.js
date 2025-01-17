function foo(a, b) {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return 0; // Or handle undefined as you see fit
  }
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(undefined, undefined)); // Output: 0
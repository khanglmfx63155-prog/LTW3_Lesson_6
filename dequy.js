function myFunc(n) {
  if (n < 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return myFunc(n - 1) + myFunc(n - 2);
  }
}
let result = myFunc(5);
console.log(result);

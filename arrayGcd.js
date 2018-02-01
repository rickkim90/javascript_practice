const arrayGcd = arr => {
  const gcd = (x, y) => !y ? x : gcd(y, x % y);
  return arr.reduce((a, b) => gcd(a, b));
};
// arrayGcd([1,2,3,4,5]) -> 1
// arrayGcd([4,8,12]) -> 4

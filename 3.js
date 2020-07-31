/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true;
}

function largestPrime(num) {
  for (let i = num; i > 0; i--) {
    if (num % i === 0 && isPrime(i)) return i;
  }
}

module.exports = largestPrime;
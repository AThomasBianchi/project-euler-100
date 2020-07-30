
// find all multiples of 3 or 5
// less than the number given
// sum those numbers

function findSum(num) {
  const multiples = [];
  for (let i = 0; i < num; i++) {
    if (
      i % 3 === 0 ||
      i % 5 === 0
    ) {
      multiples.push(i);
    }
  }
  return multiples.reduce((a, b) => a + b)
}

module.exports = findSum
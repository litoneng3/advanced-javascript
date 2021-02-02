const numbers = [12, 3, 4, 56, 223, 12, 32];

const newNumbers = numbers.map(x => x * 2);
// console.log(newNumbers);

const even = numbers.filter(x => x % 2 == 0);
console.log(even);
const bigger = numbers.find(x => x > 100);
console.log(bigger);
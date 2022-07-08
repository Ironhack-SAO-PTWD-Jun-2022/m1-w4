// Array.sort()
// tabela ASCII

const numbers = [ 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18 ];

numbers.sort();

console.log('numbers.sort()', numbers);

// 0, 1, 112
// a, b, bbc

// como funciona

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
};

// bubble sort
// [ 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18 ]
// 22 < 23: ordem certa!
// 23 < 99: ordem certa!
// 99 < 68: troca de lugar! > [ 22, 23, 68, 99, 1, 0, 9, 112, 223, 64, 18 ]
// 99 < 1: troca de lugar! > [ 22, 23, 68, 1, 99, 0, 9, 112, 223, 64, 18 ]
// ...

numbers.sort((a, b) => a - b);

console.log('numbers.sort(função):', numbers);

// inverso
numbers.sort((a, b) => b - a);

console.log('numbers.sort(função invertida):', numbers);


// com strings
const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

// words.sort();

// console.log('words.sort():', words);

// words.sort((a, b) => a.localeCompare(b));

// console.log('words.sort(função):', words);

// words.sort((a, b) => b.localeCompare(a));
// words.reverse();

const sortedWords = words.sort().reverse();

console.log('words.sort(função inversa):', sortedWords);

// arr.map().filter().sort()[0];
// .forEach() não retorna nada, então não posso encadear numa sequencia como a acima

// words.sort((a, b) => {
//   if(a.length < b.length) return -1;
//   if(a.length > b.length) return 1;
//   if(a.length === b.length) return 0;
// })

// words.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
words.sort((a,b) => {
  const sortedByLength = a.length - b.length;
  const sortedByLetter = a.localeCompare(b);
  if (sortedByLength === 0) return sortedByLetter;
  return sortedByLength;
})

console.log('words.sort(por comprimento):', words);

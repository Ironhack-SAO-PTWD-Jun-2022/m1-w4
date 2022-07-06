// .map()
// passa por todos os elementos do array e retorna um array novo
const arr = [1, 2, 3];

// const newArr = arr.forEach(function (num) {
//   return num * 2;
// })


// ES5
// const newArr = arr.map(function (num) {
//   if(typeof num === 'number') return num * 2;
//   return 'hi';
// });

// ES6
const newArr = arr.map(num => num * 2);

// se fosse fazer com forEach
const newArrFE = [];
arr.forEach(num => newArrFE.push(num * 2));

console.log(arr);
console.log(newArr);
console.log(newArrFE);

const foods = ['maçã', 'pera', 'goiaba'];
const uppercaseFoods = foods.map(food => food.toUpperCase());

console.log(uppercaseFoods);

// .reduce()
// transforma o meu array em um único valor

// sintaxe
/*
  array.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual
  });

  array.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial);
*/

const numbers = [2, 3, 6, 12];

const total = numbers.reduce((acc, value) => {
  console.log(`Acumulador: ${acc}\tValor atual: ${value}`);
  return acc + value;
}, 23);

console.log('Total:', total);

const strings = ['essa', 'é', 'uma', 'string', 'muito', 'grande'];

const result = strings.reduce((acc, value) => {
  console.log(`Acumulador: ${acc}\tValor atual: ${value}`);
  return `${acc} ${value}`;
});

console.log('Resultado:', result);

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 }
]

const ages = people.reduce((sum, people) => sum + people.age, 0);
console.log(ages);

// .filter();
// criar um novo array com os itens filtrados do array original
// filtro é uma condição q retorna true ou false
// se for true, adiciona no novo array

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbersArr.filter((number) => number % 2 === 0)

console.log(numbersArr);
console.log(evenNumbers);


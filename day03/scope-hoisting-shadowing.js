/*
  3 escopos
  1. global
  2. nível de função
  3. nível de bloco ---> { }
*/

const msg = 'Olá, do escopo global!';

function sayHelloFromLocalScope() {
  const greeting = 'Olá do escopo local/da função';
  return greeting;
}

// console.log(msg);
// console.log(greeting);

let outerVar = 1;
function inner() {
  let innerVar = 2;
  console.log(outerVar);
}

// inner();
// console.log(innerVar);

// antes ES6 --> var
// consigo redeclarar e reatribuir
var messageVar = 'Olá do escopo global!';
var messageVar = 'Esta é a segunda msg';
messageVar = 'Esta é a terceira msg';

// exemplo que é ruim a re-declaração de variável
var nameVar = 'Ironhacker';

if (true) {
  var nameVar = 'João';
  console.log(`Dentro da declaração: ${nameVar}`);
}

console.log(`Fora da declaração: ${nameVar}`);

for (var i = 0; i < 3; i += 1){
  console.log(`dentro do for: ${i}`);
}
console.log(`depois do for: ${i}`);

// var i = 0; // se não reatribuir, meu while fica funcionando pela metade, ou nem funciona

while(i < 4){
  console.log(`dentro do while: ${i}`)
  i += 1;
}
console.log(`depois do while: ${i}`);

for (let j = 0; j < 3; j += 1){
  console.log(`dentro do for: ${j}`);
}
// console.log(`depois do for: ${j}`); // dá erro!

// let - não pode ser re-declarado, mas pode ser reatribuído.
let messageLet = 'Olá do escopo global!';
// let messageLet = 'Esta é a segunda msg'; // dá erro!
messageLet = 'Esta é a terceira msg';

let nameLet = 'Ironhacker';

if (true) {
  let nameLet = 'João'; // variável diferente da nameLet do escopo de fora!
  // nameLet = 'João'; // reatribuí o valor na variável de fora!
  console.log(`Dentro da declaração: ${nameLet}`);
}

console.log(`Fora da declaração: ${nameLet}`);

// const - não pode ser re-declarado nem re-atribuído!
const messageConst = 'Olá do escopo global!';
// const messageConst = 'Esta é a segunda msg'; // dá erro!
// messageConst = 'Esta é a terceira msg'; // dá erro!

// objetos
const obj = {};
obj.name = 'Ironhacker';
console.log(obj);

// obj = { name: 'Ironhacker' }; // dá erro!

// HOISTING
console.log(message);
var message = 'Olá! Sou uma var do exemplo de hoisting!';
console.log(message);

exempleFunctionWithHoisting();

function exempleFunctionWithHoisting() {
  console.log('Função no exemplo de hoisting!');
}

// SHADOWING
let a = 1;
let b = 2;

function innerShadowing() {
  a = 4;
  // b = 5; // dá erro!
  let b = 3;
  b = 8;
  console.log(`b dentro da função: ${b}`);
}

console.log(`a: ${a}, b: ${b}`);
innerShadowing();
console.log(`a: ${a}, b: ${b}`);

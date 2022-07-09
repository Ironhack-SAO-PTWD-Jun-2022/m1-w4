// função que demora muito!

const getFirstElementOfArray = (arr) => {
  return arr[0];
}

const arr = ['madrid', 'barcelona', 'miami'];
const firstElement = getFirstElementOfArray(arr);
console.log(firstElement);

// hipotético

// const readFile = (file) => {
//   // ... vai fazer um monte de coisas
//   return contentFile.length;
// }

// const textSize = readFile('odyssey.txt');
// console.log(textSize);

// normalFunction(); // Olá => 0.1s
// asyncFunction(); // tudo bem => 4s
// normalFunction2(); // com você? => 0.1s

/*
Olá
com você?
tudo bem
*/

// const text1 = normalFunction(); // Olá => 0.1s
// const text2 = asyncFunction(text1); // tudo bem => 4s
// const text3 = normalFunction2(text2); // com você? => 0.1s
// normalFUnction2 recebe undefined, pois não veio ainda o resultado da asyncFunction!


// Callbacks
// setTimeout()
// sintaxe
//                              |função a ser executada
// const timeoutId = setTimeout(callbackFunction, 1000)
//       |identificação do timeout                |tempo de espera (opcional)

// ES5
const timeoutId1 = setTimeout(function () {
  console.log('timeout 1!')
}, 5000)

// ES6
const timeoutId2 = setTimeout(() => console.log('timeout 2!'), 5000)

clearTimeout(timeoutId1);
clearTimeout(timeoutId2);


// setInterval()
// sintaxe
//                                |função a ser executada
// const intervalId = setInterval(callbackFunction, 1000)
//       |identificação do timeout                  |tempo de espera

// exemplo usando timeout
let counter = 0;
// const counterFn = () => {
//   console.log(counter);
//   counter += 1;
//   const timeoutId =  setTimeout(counterFn, 1000);
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// }
// counterFn();

// exemplo com setInterval
const intervalId = setInterval(() => {
  console.log(counter);
  counter += 1;
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000)
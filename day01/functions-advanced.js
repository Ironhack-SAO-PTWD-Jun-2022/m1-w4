// função declarada
function calcSum(x, y) {
  return x + y;
}

console.log(calcSum(3, 4));

// função como expressão
const welcomeMsg = function (msg) {
  console.log(msg);
};

welcomeMsg('Bem vindos!');
console.log(welcomeMsg);

// diferenças

// Hoisting = Içamento
funcaoDeclarada();

function funcaoDeclarada () {
  console.log('Eu sou uma função declarada');
};

// funções como expressão devem ser declaradas ANTES de poderem ser usadas.
const funcaoExpressao = function () {
  console.log('Uma função como expressão!')
};

funcaoExpressao();

// Callbacks
const functionExample = function () {
  console.log('Função de exemplo de callback');
};

const functionExample2 = function () {
  console.log('Função de exemplo de callback 2');
  return 'Retorno do exemplo 2'
};

const functionWithCallback = function (callback) {
  console.log('recebi:', callback);
  console.log('Minha função principal');
  callback();
};

functionWithCallback(functionExample);
functionWithCallback(functionExample2);
functionWithCallback(function () {
  console.log('aeee, outro exemplo!');
})

// exemplo de callback
function comerJantar(callback) {
  // setTimeout(function () {
    console.log('Comendo a janta!');
    if(callback) callback();
  // }, 2000);
}

function comerSobremesa() {
  console.log('Comendo a sobremesa!');
}

function irDormir() {
  console.log('Indo dormir!')
}

comerJantar(comerSobremesa);
comerJantar(irDormir);
// comerSobremesa();

// funções anônimas
function displayInfo(name, cb) {
  cb(name);
};

displayInfo('HÉLIO', function (name) {
  console.log(`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);
});

function getLength(name, cd) {
  cd(name);
};

getLength('HÉLIO', function (name) {
  console.log(`${name} has ${name.length} letters`);
});

// setTimeout(function () {
//   console.log('Sou uma func anonima!')
// }, 1000);

// Arrow Functions
// sintaxe da função de expressão
// const greeting = function (name) {
//   return `Hello, ${name}`;
// }
// console.log(greeting('Walison'));

// sintaxe de uma Arrow Function
const greeting = name => `Hello, ${name}`;
console.log(greeting('Walison'));

// this e escopo dentro das funções

const user = {
  name: 'Gabriel',
  age: 30,
  getOlder: function () {
    setInterval(() => {
      // console.log(this);
      this.age += 1;
      console.log(this.age);
    }, 1000);
  }
};

// user.getOlder();

// arguments

function printSomething() {
  console.log('all:', arguments);
  console.log('length:', arguments.length);
  console.log('index 0:', arguments[0]);
  console.log('index 1:', arguments[1]);
  console.log('index 2:', arguments[3]);
};

printSomething('hi', 1, false);

function printArgs() {
  // arguments.forEach(arg => console.log(arg)); // Não funciona!
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
};

// printArgs('goiaba', 37, true, [ 'Renata', 'Caio' ], { name: 'Jandson', hobby: 'Ler'});

function useArgsAsArr() {
  const argsArr = Array.from(arguments);
  // console.log(argsArr);
  argsArr.forEach(arg => console.log(arg));
};

useArgsAsArr('goiaba', 37, true, [ 'Renata', 'Caio' ], { name: 'Jandson', hobby: 'Ler'})

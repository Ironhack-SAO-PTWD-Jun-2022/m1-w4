// Primitivos - copia valor
let price1 = 20.99;
let price2 = 20.99;
console.log(price1 === price2);

let name1 = "Hugo";
let name2 = "Hugo";
console.log(name1 === name2);

let fruit1 = "goiaba";
let fruit2 = fruit1;
console.log(fruit1 === fruit2);
console.log("goiaba" === "goiaba");

// Não-primitivos - copia referência
const book1 = {
  author: "J.K. Rowling",
};

const book2 = book1;

book2.author = "J.R.R. Tolkien";

console.log(book1);
console.log(book2);

console.log(book1 === book2);

const students = ["Caio", "Gabriel", "Jandson"];
const ironhackers = students;
console.log(students === ironhackers);

// objetos
const book3 = {
  author: "Dali Carnegie",
};

const book4 = {
  author: "Dali Carnegie",
};

console.log(book3 === book4); // false

const students2 = ["Caio", "Gabriel", "Jandson"];
const ironhackers2 = ["Caio", "Gabriel", "Jandson"];
console.log(students2 === ironhackers2); // false

// copiando um objeto

// Object.assign();
/*
  const book1 = {
    author: 'J.R.R. Tolkien',
  };
*/

const book1Copy1 = Object.assign({}, book1);
book1Copy1.author = "J. K. Rowling";
console.log(book1);
console.log(book1Copy1);
console.log(book1Copy1 === book1);

// só q isso cria uma cópia rasa!
// exemplo

const book5 = {
  author: "Charlotte Bronte",
  publishers: [{ companyName: "AB" }, { companyName: "CD" }],
};

const book5Copy1 = Object.assign({}, book5);
book5Copy1.author = "Emily Bronte";
book5Copy1.publishers[0] = {
  companyName: "Cia Super Legal",
};

console.log(book5);
console.log(book5Copy1);

// como resolvemos isso usando o for..in
const book1Copy2 = {};

for (let prop in book1) {
  book1Copy2[prop] = book1[prop];
}

book1Copy2.author = "William Shakespear";
console.log(book1);
console.log(book1Copy2);

// com deep copy
// const book5Copy2 = {};
// for (let prop in book5) {
//   if (typeof book5[prop] === 'object'){
//     for (let innerProp in book5[prop]) {
//  isso daria muito trabalho, sem contar que não sabemos a "profundidade" do objeto
//     }
//   }
// }

const cloneObject = (obj) => {
  let clone = {};
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      clone[prop] = cloneObject(obj[prop]);
    } else {
      clone[prop] = obj[prop];
    }
  }
  return clone;
};

const book5Copy3 = cloneObject(book5);
book5Copy3.author = "Outro autor";
book5Copy3.publishers[0].companyName = "Outra editora";
console.log(book5);
console.log(book5Copy3);

// JSON - JavaScript Object Notation
/*
  {
    "prop1": "valor 1",
    "prop2": [
      1,
      true
    ]
  }
*/

const copyJSONs = JSON.stringify(book5);
console.log("JSON.stringify", copyJSONs);

const copyJSONp = JSON.parse(copyJSONs);
copyJSONp.publishers[0].companyName = "Outra editora";
console.log("JSON.parse", copyJSONp);
console.log("book5 original:", book5);

console.log(copyJSONs.author);
console.log(copyJSONp.author);

const copy = JSON.parse(JSON.stringify(book5));

// copiando um array

const students3 = ["Walison", "João", "Renata"];

// ES6 spread operator => ... - copia rasa
const copyArrSp = [...students3];

// .slice() - copia rasa
const copyArrSl = students3.slice();

// for - cópia rasa
function copyArray(arr) {
  const clone = [];
  for (let i = 0; i < arr.length; i += 1) {
    clone.push(arr[i]);
  }
  return clone;
}
const copyArrFor = copyArray(students3);


// JSON - cópia profunda
const nestedStudents = [
  [ 'Walison', 'João', 'Renata', 'Caio' ],
  [ 'Hélio', 'Hugo', 'Jandson' ]
]


const copyArrJSON = JSON.parse(JSON.stringify(nestedStudents));

copyArrJSON[1].push("Gabriel");
console.log(nestedStudents);
console.log(copyArrJSON);

// adicionar elementos num array
// métodos mutáveis - alteram o array original
// .push()
// .unshift()
const copy1 = [...students3];
copy1.push('Gabriel');

// métodos imutáveis - retornam um array novo sem alterar o original
// .concat();
// spread ...
const copy2 = ['Gabriel', ...students3];

// REMOVENDO elementos do array
// métodos mutáveis
// .splice()
// .pop()
// .shift()
const copy3 = [...students3];
copy3.splice(1, 1);

// métodos imutáveis
// .filter()
// .slice() + ...
const copy4 = students3.filter((elemento) => elemento === 'João');
const copy5 = [...students3.slice(1,2)]

console.log(students3);
console.log(copy4);


// adicionando propriedades no objeto com o ...
const sameBook = {...book5, pages: 400};
console.log(sameBook);

// desestruturando o objeto para remover usando o ...
const {author, pages, ...rest} = sameBook;
console.log(sameBook);
console.log(author);
console.log(rest);



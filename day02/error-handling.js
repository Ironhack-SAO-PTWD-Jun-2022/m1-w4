/* ESTRUTURA
try {
  doSomething();
} catch (error) {
  logError(error);
} finally { // opcional
  // executar independente se conseguiu fazer a operação ou se deu erro
}
*/

const powerOfThree = (num) => num ** 3;

try {
  console.log('try - é executado primeiro!');
  powerOfThree(9);
} catch (error) {
  console.log('catch - é executado se houver um erro!');
  console.log('>> ERROR >>', error); 
} finally {
  console.log('finally - é sempre executado');
}

// erro de referência
const name = 'Ted';
// console.log(nme); // erro
// console.log(name); // correto

// erro de sintaxe
const doSomething = () => {
  console.log('estou fazendo algo!');
} // gera erro se não tiver esse }, por exemplo.
// } // se tiver a mais também gera erro
doSomething();

// erro de tipo
const student = 'Hélio';
// student.toFixed(); // .toFixed() é método de Number

// jogando (throw) erros!
const getUserName = (user) => {
  if ( !user.name ) {
    throw new SyntaxError('Dados incompletos: não tem "name"');
  }
  return user.name;
}

const std1 = {
  name: 'Walison',
  hobby: 'Dormir'
}
const std2 = {
  hobby: 'CSzinho',
}

try {
  console.log('entrei no try')
  const stdName = getUserName(std2);
  console.log('Name:', stdName);
} catch (error) {
  console.log('ERROR >>', error);
} finally {
  console.log('fim do try catch!');
}